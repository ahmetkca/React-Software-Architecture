import express from "express";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { renderToString } from "react-dom/server";

import { StaticRouter } from "react-router-dom/server";
import App  from "./src/App";
import path from "path";
import fs from "fs";
const app = express();

global.window = {}; // this is needed for frontend Articles component to work without throwing window is undefined error

const PORT = 8080;

app.use(express.static("./build", { index: false }));

const articles = [
  {
    id: 1,
    title: "Article 1",
    author: "Jack",
    body: "This is the body of article 1"
  },
  {
    id: 2,
    title: "Article 2",
    author: "Jill",
    body: "This is the body of article 2"
  },
  {
    id: 3,
    title: "Article 3",
    author: "John",
    body: "This is the body of article 3"
  }
];

app.get("/api/articles", (req, res) => {
  res.json(articles);
}); // get all articles

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

    const loadedArticles = articles;

  
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<script>window.preloadedArticles = ${JSON.stringify(loadedArticles)}</script><div id="root">${reactApp}</div>`
      ).replace('{{ styles }}', sheet.getStyleTags())
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
