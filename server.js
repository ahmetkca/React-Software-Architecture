import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

const app = express();

const PORT = 8080;


app.get('/*', (_, res) => {
  const reactApp = renderToString(
    <h1>Hello from the server side!</h1>
  );

  res.send(`
    <html>
      <body>
        <div id="root">
          ${reactApp}
        </div>
    </html>
  `)
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
