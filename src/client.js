import "./module-a";
import ralphJpg from "./images/ralph.jpg";
import "./styles/main.css";
// Webpack will, by default, look for a entry file
// at this location (i.e. /src/index.js)

// You can supply webpack with the --mode=development option:
// webpack --mode=development

// You can tell webpack to auto-bundle your code with:
// webpack --watch

console.log("I'm a client!");
console.log("Ralph's value:", ralphJpg);

document.addEventListener("DOMContentLoaded", () => {
  const main = document.createElement("main");
  main.innerHTML = `
    <h1>☃️ Webpack Demo</h1>
    <img src="${ralphJpg}" />
    `;

  document.body.append(main);
});
