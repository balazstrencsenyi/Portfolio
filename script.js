import { createHeader, createMain, createEducation, createPortfolio } from "./createDom.js";
import { whenScrolled } from "./scroll.js";

export async function main() {
  const root = document.querySelector("#root");

  const header = createHeader();
  root.appendChild(header);

  const main = createMain();
  root.appendChild(main);
}

window.onload = async () => {
  await main();
  whenScrolled();
};
