import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import { StaticRouter } from "react-router-dom/server";
import App  from "./src/App";
import path from "path";
import fs from "fs";
const app = express();

const PORT = 8080;

app.use(express.static("./build", { index: false }));

app.get('/*', (req, res) => {
  const reactApp = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
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
      )
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
