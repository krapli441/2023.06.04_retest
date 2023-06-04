import header from "./components/header.js";
import main from "./components/main.js";
import bottom from "./components/bottom.js";

const root = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("id", "container");
root.appendChild(container);

container.appendChild(header);
container.appendChild(main);
container.appendChild(bottom);
