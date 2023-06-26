import {
  createHeader,
  createMain,
  createEducation,
  createPortfolio,
  createNavBar,
} from "./createDom.js";
import { whenScrolled } from "./scroll.js";

export async function main() {
  const root = document.querySelector("#root");
  const body = document.querySelector("body");

  const header = createHeader();
  body.appendChild(header);

  const navBar = createNavBar();
  body.appendChild(navBar);

  const main = createMain();
  root.appendChild(main);
}

window.onload = async () => {
  await main();
  whenScrolled();
};
