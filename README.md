# NAB Weather 

## 🚀 Table of Contents
- **[Getting Started](https://github.com/ttmhxgit/nab-weather#getting-started)**
- **[Script](https://github.com/ttmhxgit/nab-weather#script)**
- **[Library](https://github.com/ttmhxgit/nab-weather#library)**
- **[Structure](https://github.com/ttmhxgit/nab-weather#structure)**

# **Getting Started**

**This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).**

- Clone the branch in the repository

```
git clone git@github.com:ttmhxgit/nab-weather.git
```

- Use [NodeJs](https://nodejs.org/) version v14.17.2 or upper

```
node -v
```

- Use package manager [Yarn](https://yarnpkg.com/) version 1.22.10 or upper

```
yarn -v  
```

**Set local enviroment**
- Create ```.env``` file in the root directory of the project. Add the following properties in it:
```
REACT_APP_API_URL = https://api.openweathermap.org/data/2.5
REACT_APP_API_KEY = 8558922033368b54985fb6ea5d1b0d3a
REACT_APP_ICON_URL = https://openweathermap.org/img/w
```

# **Script**
In the project directory, you can run:

```
yarn run start
```
Runs the app in the development mode.Open [http://localhost:3000] to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

```
yarn run test
```
Launches the test runner in the interactive watch mode.

```
yarn run build
```
Builds the app for production to the build folder. It correctly bundles React in production mode.

```
yarn run eject
```
It will stop hiding what it's got installed under the hood and instead eject those things into your project's package.json for everyone to see.
# **Library**

API weather: using [openweathermap](https://openweathermap.org/)

```
https://api.openweathermap.org/data/2.5
```
- **[React](https://reactjs.org/)** _(v17.0.2)_
- Styling syntax was written in SCSS and using **[TailwindCSS](https://tailwindcss.com/)**

# **Structure**

```
root
|-- public
    |-- favicon.ico
    |-- index.html
    |-- manifest.json
    |-- robots.txt
|-- src
    |--__mocks__
      |--mock-forecast.mock.js
    |--components
      |--__tests__
      |--ForeCast.js
      ...
    |--hooks
      |--useWeather.js
    |--libs
      |--__tests__
      |--fetcher.js
      |--utils.js
    |--views
      |--__tests__
      |--App.js
    |--index.css
    |--index.js
    |--setupTest.js
    |--craco.config.js
    |--package.json
    |--tailwind.config.js
    |--.env
    |--.gitignore
```
1.  **`public`**: This directory contain all public assets/favicons.
2.  **`src`**: This directory contain all of the code related to what you see on the front-end of the application.
    `__mocks__`: contain mockdata for test
    `components`: contain several components with each component and having an own files. `*.js`
    `hooks`: contain several customize hook with each hook and having an own files. `*.js`
    `libs`: contain files with each file representing some utility function.
    `view`: contain several pages with each contain wrapping many components and having an own files. `*.js`
    `components, libs, view` These 3 directory have it own `__test` directory containing several test cases testing a utility function or a component.
3.   **`craco.config.js`**: contains the configuration of `craco`.
4.   **`tailwind.config.js`**: contains the configuration related to `tailwindcss`.


