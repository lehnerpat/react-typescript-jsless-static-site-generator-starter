import path from "path";
import fs, { mkdirp } from "fs-extra";
import ReactDOMServer from "react-dom/server";
import { Body } from "../src/Body";
import { createElement } from "react";
import { ServerStyleSheet } from "styled-components";
import { HeadContent } from "../src/HeadContent";
import { runAsyncMain } from "./util/runAsyncMain";
import { assetsDirPath, outDirPath } from "./util/paths";

async function build() {
  await fs.mkdirp(outDirPath);

  await copyAssets();
  await buildReactApp();
}

async function buildReactApp() {
  const sheet = new ServerStyleSheet();
  const bodyMarkup = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(createElement(Body)));
  const styleTags = sheet.getStyleTags();
  const headContent = ReactDOMServer.renderToStaticMarkup(createElement(HeadContent));
  const markup = `
    <!DOCTYPE html>
    <html lang="en">
      <head>${headContent}${styleTags}</head>
      ${bodyMarkup}
    </html>`;

  await fs.writeFile(path.resolve(outDirPath, "index.html"), markup);
}

async function copyAssets() {
  const assetsOutDir = path.resolve(outDirPath, "assets");
  await mkdirp(assetsOutDir);
  await fs.copy(assetsDirPath, assetsOutDir);
}

runAsyncMain(build);