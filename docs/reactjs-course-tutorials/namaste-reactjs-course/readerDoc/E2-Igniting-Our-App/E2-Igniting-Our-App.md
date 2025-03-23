---
sidebar_position: 2
---

# E2 - Igniting Our App

> In this episode, we ignite our React app development journey. We dive into the fundamentals, exploring React components, JSX, and the key concepts that power React. It's the essential foundation for creating dynamic and interactive user interfaces.

- [E2-Igniting Notes](https://github.com/pravn27/reactjs-tech-doc/blob/master/docs/reactjs-course-tutorials/namaste-reactjs-course/readerDoc/E2-Igniting-Our-App/E2-Igniting-Our-App.pdf)
- [Assignment - Igniting ](https://github.com/pravn27/reactjs-tech-doc/blob/master/docs/reactjs-course-tutorials/namaste-reactjs-course/readerDoc/E2-Igniting-Our-App/Assignment-Igniting.pdf)

## Reference links from pdf notes & assignments

- [Creating your own create-react-app](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
- [Parcel documentation](https://parceljs.org/getting-started/webapp/)
- [Parcel on Production](https://parceljs.org/features/production/)
- [Browsers list](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)

## key points

- Before going to production ready code, there a lots of process should be take care like bundling, minification, compression, etc.
  - bundler using
  - minifier
  - compression
  - caching
  - tree shaking
  - lazy loading
  - code splitting
- How do we build react production ready app code base without any scaffolding tool like create-react-app ? check & explore
- `npm is not a node package manager`, just it works behind the node environment, it is a package registry means manages packages
  - npm does not have full form
  - it is a package registry means manages packages / library / utils
- What is bundler ?
  - Bundler is a tool that takes all the code and dependencies and bundles it into a single file / compress / minify, and ship to production ready apps
  - webpack, rollup, parcel, vite etc
- There are 2 major dependency in npm
  - dev dependency - used for development purpose only / during development phase only, not in production
    - how to add ? `npm install --save-dev package-name`
  - normal or production dependency - used in production or final build code base
    - how to add ? `npm install package-name`
- whats is the difference between caret(^) & tilde(~) in package.json in versioning ?

  - In `package.json`, **caret (`^`)** and **tilde (`~`)** are version specifiers used in **semantic versioning (SemVer)** to control how updates are installed when running `npm install`.

    ***

    **1. Caret (`^`) - Allows Minor and Patch Updates**

    - Syntax: `^major.minor.patch`
    - It allows **minor** (`x.y`) and **patch** (`x.y.z`) updates but **locks the major version**.
    - Example:

    ```json
    "react": "^18.2.0"
    ```

    - This allows updates from **18.2.0** to **18.x.x** but not **19.x.x**.

    - ✅ **Allowed versions**: `18.2.1`, `18.3.0`, `18.9.5`
    - ❌ **Not allowed**: `19.0.0`

    ***

    **2. Tilde (`~`) - Allows Only Patch Updates**

    - Syntax: `~major.minor.patch`
    - It allows **only patch** (`x.y.z`) updates but locks **minor and major versions**.
    - Example:

    ```json
    "react": "~18.2.0"
    ```

    - This allows updates from **18.2.0** to **18.2.x** but not **18.3.0**.

    - ✅ **Allowed versions**: `18.2.1`, `18.2.9`
    - ❌ **Not allowed**: `18.3.0`, `19.0.0`

    ***

    **Which One to Use?**

    | Specifier   | Allows Updates | Stability     | Common Use Case                                   |
    | ----------- | -------------- | ------------- | ------------------------------------------------- |
    | `^` (Caret) | Minor & Patch  | More Flexible | Libraries & frameworks (e.g., React, Express)     |
    | `~` (Tilde) | Only Patch     | More Stable   | Critical dependencies (e.g., build tools, ESLint) |

    If you want **stability**, use `~`. If you want **more flexibility while avoiding breaking changes**, use `^`.

- node_modules contains all the dependencies (including transitive dependencies, peer dependencies as well) of the project.

- **NPM vs NPX: Key Differences**

  > Both `npm` and `npx` are part of Node.js, but they serve different purposes in package management and execution.

  ***

  **1. NPM (Node Package Manager)**

  📌 **Used for installing and managing packages**

  **Key Features:**

  - Installs packages globally or locally.
  - Manages dependencies in `package.json`.
  - Runs scripts defined in `package.json`.

  **Common Commands:**

  ```sh
  npm install <package>       # Installs a package locally
  npm install -g <package>    # Installs a package globally
  npm run <script>            # Runs a script from package.json
  ```

  **Example: Installing React Locally**

  ```sh
  npm install react
  ```

  This installs `react` inside `node_modules/` and adds it to `package.json`.

  ***

  **2. NPX (Node Package eXecute)**

  📌 **Used for running packages without installing them globally**

  **Key Features:**

  - Runs npm packages **without permanently installing them**.
  - Helps execute CLI tools.
  - Ensures you run the correct version of a package.

  **Common Commands:**

  ```sh
  npx create-react-app my-app  # Runs create-react-app without installing it
  npx eslint .                 # Runs ESLint without installing globally
  ```

  **Example: Running `create-react-app`**

  ```sh
  npx create-react-app my-app
  ```

  👉 This downloads `create-react-app`, runs it, and then removes it. No global installation needed!

  ***

  **Key Differences**

  | Feature      | NPM (`npm`)                                       | NPX (`npx`)                                    |
  | ------------ | ------------------------------------------------- | ---------------------------------------------- |
  | Purpose      | Installs and manages packages                     | Runs packages without installing them globally |
  | Installation | Packages are installed permanently (local/global) | Packages are downloaded & executed temporarily |
  | Execution    | Runs installed packages via `npm run`             | Runs commands without needing installation     |
  | Example      | `npm install -g eslint` then `eslint .`           | `npx eslint .` (no global install needed)      |

  **When to Use What?**

  - ✅ Use **`npm`** when you need to **install** a package for reuse.
  - ✅ Use **`npx`** when you want to **run a one-time command** without installing.

- [Parcel build tool](https://parceljs.org/), go through documentation & its features

- Why reactjs is so fast ?

  - Not only from ReactJS, its combining with build tool like parcel features, webpack, other best practices, dev experience, etc.

- Commit to GitHub only the essential codebase. Avoid pushing automatically generated files, such as the `dist/` or `build/` folder, derived from the core codebase. Use gitignore to ignore these files.

- How to do config browsers compatibility with specific versions of browsers ?
  - browserslist config in package.json
  - https://www.npmjs.com/package/browserslist
  - https://github.com/browserslist/browserslist#readme
  - App supports on last 3 latest versions of all the browsers
    - https://browserslist.dev/?q=bGFzdCAzIHZlcnNpb24%3D

## Assignments - Q & A

1.
