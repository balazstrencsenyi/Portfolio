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

  const navBar = createEl("div");
  navBar.classList.add("nav-bar");

  const navEl1 = createEl("div");
  navEl1.classList.add("navEl");
  navEl1.innerText = "Home";
  navEl1.id = "upper-item";

  const navEl2 = createEl("div");
  navEl2.classList.add("navEl");
  navEl2.innerText = "Education";

  const navEl3 = createEl("div");
  navEl3.classList.add("navEl");
  navEl3.innerText = "Portfolio";

  const navEl4 = createEl("div");
  navEl4.classList.add("navEl");
  navEl4.innerText = "Experience";

  const navEl5 = createEl("div");
  navEl5.classList.add("navEl");
  navEl5.innerText = "Contact";
  navEl5.id = "lower-item";

  const mainTextContainer = createEl("div");
  mainTextContainer.classList.add("main-text-container");

  const mainTextHeader = createEl("div");
  mainTextHeader.classList.add("main-text-header");
  mainTextHeader.innerText = "About me";

  const mainText = createEl("div");
  mainText.classList.add("main-text");
  mainText.innerText = "I am a certified Economist and skilled Frontend Developer with a strong blend of creative thinking and analytical abilities. My practical experience in the finance industry, coupled with proficiency in frontend languages and tools such as HTML, CSS, JavaScript, React, Node.js and Express, git, and GitHub, equips me with comprehensive expertise.";

  mainTextContainer.append(mainTextHeader,mainText);

  navBar.append(navEl1, navEl2, navEl3, navEl4, navEl5);

  main.append(navBar, mainTextContainer);

  return main;
}