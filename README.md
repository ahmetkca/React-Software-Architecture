# React-Software-Architecture

## [Server-Side Rendering (SSR)](https://github.com/ahmetkca/React-Software-Architecture/server-side-rendering)
> When your **server is the one that renders** your React code to HTML **instead of user's browser**.

### Client-Side Rendering
- Renders app to HTML in the user's browser.
- Loads index.html from server, loads JavaScript bundle from server, runs bundle, displays app, loads data.
- Less strain on the server, but generally slower UX.

### Server-Side Rendering
- Renders app to HTML on the server.
- Runs JavaScript bundle, loads data, creates HTML document, sends to client-side
- Faster UX and better for SEO, but more strain on server.