import { createEl } from "./utils.js";

export function createHeader () {
  const header = createEl("header");
  const h1 = createEl("h1");
  h1.innerText = "Portfolio";
  header.append(h1);
  return header;
}

export function createMain () {
  const main = createEl("div");
  main.classList.add("main");
  return main;
}