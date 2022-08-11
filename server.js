import express from "express";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { renderToString } from "react-dom/server";

import { StaticRouter } from "react-router-dom/server";
import App  from "./src/App";
import path from "path";
import fs from "fs";
const app = express();

const PORT = 8080;

app.use(express.static("./build", { index: false }));

app.get('/*', (req, res) => {

  const sheet = new ServerStyleSheet();

  const reactApp = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
  );

  const templateFile = path.resolve("./build/index.html")
  fs.readFile(templateFile, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Something went wrong!");
      return;
    }
  
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${reactApp}</div>`
      ).replace('{{ styles }}', sheet.getStyleTags())
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
