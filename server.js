import "isomorphic-fetch";
import express from "express";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { renderToString } from "react-dom/server";

import { StaticRouter } from "react-router-dom/server";
import App  from "./src/App";
import path from "path";
import fs from "fs";

import { InitialDataContext } from "./src/InitialDataContext";

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

app.get('/*', async (req, res) => {
  console.log(req.url);

  const sheet = new ServerStyleSheet();

  const contextObj = {
    _isServer: true,
    _requests: [], // list of async requests that need to be resolved for the second time of rendering to fetch and render the data on Server-Side
    _data: {},
  };

  renderToString(
    sheet.collectStyles(
      <InitialDataContext.Provider value={contextObj}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </InitialDataContext.Provider>
    )
  );

  await Promise.all(contextObj._requests); // wait for all async requests to be resolved before rendering the data on the server side
  contextObj._isServer = false; // set _isServer to false to indicate that the data is now available on the server side
  delete contextObj._requests; // delete _requests to prevent memory leak

  const reactApp = renderToString(
      <InitialDataContext.Provider value={contextObj}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </InitialDataContext.Provider>
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
        `<script>window.preloadedData = ${JSON.stringify(contextObj)}</script><div id="root">${reactApp}</div>`
      ).replace('{{ styles }}', sheet.getStyleTags())
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
