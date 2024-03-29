# react-typescript-jsless-static-site-generator-starter

A starter for using [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Node](https://nodejs.org/en/) to generate a static site -- without runtime dependencies on React or any JS!

## Prerequisites

- Node.js in a current version (tested with v20, but should work with some prior versions too)
- Yarn or NPM

## Getting Started

1. Download the sources: either clone this repository or download as a [ZIP](https://gitlab.com/lehnerpat/react-typescript-jsless-static-site-generator-starter/-/archive/master/react-typescript-jsless-static-site-generator-starter-master.zip) or [TAR](https://gitlab.com/lehnerpat/react-typescript-jsless-static-site-generator-starter/-/archive/master/react-typescript-jsless-static-site-generator-starter-master.tar.gz) archive.

2. Install the dependencies: in the root directory of this project, run:

   - `yarn install` (recommended) _or_ `npm install`

3. Start the development server: in the root directory of this project, run:

   - `yarn start` (recommended) _or_ `npm start`
   - This builds the site and opens it in your browser. It also watches the sources for any changes, and automatically refreshes the site when changes are detected.

4. If you just want to build the site once (e.g. to put it onto a static hosting service), run:

   - `yarn build` (recommended) _or_ `npm build`

5. Edit the content of your site:

   - The page content (i.e. the `<body>` element and its content) is specified in `src/Body.tsx`, which must export a component named `Body` that takes no props. You can split the content to other files, of course, using regular React components and TypeScript exports/imports.
   - The contents of the `<head>` element are specified in `src/HeadContent.tsx`, which must export a component named `HeadContent` that takes no props. Unlike `Body`, this renders only the _contents_ of `<head>`, not the entire element itself (because the build script must inject some additional elements, like styles).

6. Style your site with [`styled-components`](https://styled-components.com/).

7. Put any static files (e.g. images, robots.txt) in the `static` directory, and they'll be copied to the output directory. The contents of `static` are copied directly into the output directory, e.g. `static/image.png` is copied to `out/image.png`. Directories inside `static` are copied over the same way.

8. Build your site (see above) and put the output files created in the `out` directory to wherever your website is being served from, such as [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/).

Happy building!

## Known Limitations

- You can't currently include any JavaScript interactivity in your React components. For example, you can't react to an element being clicked using an `onClick` handler.
