import { createEl } from "./utils.js";

const root = document.querySelector("#root");

export function createHeader() {
  const header = createEl("header");
  const h1 = createEl("h1");
  h1.innerText = "Portfolio";
  header.append(h1);
  return header;
}

export function buttonHandler() {
  const navEls = document.querySelectorAll(".navEl");

  navEls.forEach((navEl) => {
    navEl.addEventListener("click", (e) => {
      root.innerHTML = "";
      if (e.target.innerText === "Home") {
        createMain();
      } else if (e.target.innerText === "Education") {
        createEducation();
      } else if (e.target.innerText === "Portfolio") {
        createPortfolio();
      }
      else if (e.target.innerText === "Experience") {
        createExperience();
      }
      else if (e.target.innerText === "Contact") {
        createContact();
      }
  
    });
  });
}


export function createNavBar() {
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

  navBar.append(navEl1, navEl2, navEl3, navEl4, navEl5);
  root.append(navBar);

  return navBar;
}

export function createMain() {
  const main = createEl("div");
  main.classList.add("main");

  const mainTextContainer = createEl("div");
  mainTextContainer.classList.add("main-text-container");

  const mainTextHeader = createEl("div");
  mainTextHeader.classList.add("main-text-header");
  mainTextHeader.innerText = "About me";

  const mainText = createEl("div");
  mainText.classList.add("main-text");
  mainText.innerText =
    "I am a certified Economist and skilled Frontend Developer with a strong blend of creative thinking and analytical abilities. My practical experience in the finance industry, coupled with proficiency in frontend languages and tools such as HTML, CSS, JavaScript, React, Node.js and Express, git, and GitHub, equips me with comprehensive expertise.";

  mainTextContainer.append(mainTextHeader, mainText);
  main.append(mainTextContainer);

  root.innerHTML = ""; // Clear root content
  root.style.height = "100vh";
  root.append(createHeader(), main, createNavBar()); // Rebuild the content

  buttonHandler();

  return main;
}

export function createEducation() {
  const educationPage = createEl("div");
  educationPage.classList.add("education-page");

  const educationText = createEl("div");
  educationText.classList.add("education-text");
  educationText.innerText =
    "I have completed my Bachelor's degree in Budapest University of Technology and Economics, where I gained a strong foundation in computer science and technology. Additionally, I have obtained a degree in Logistics Management, which has provided me with valuable knowledge and skills in the field of supply chain management. To further enhance my skill set and pursue my passion for frontend development, I attended a Frontend Developer school at CodeCool. During this program, I received comprehensive training in various technologies and frameworks, including HTML, CSS, JavaScript, TypeScript, React, Node.js, Express, and REST API development.Through my education and practical experience, I have developed a solid understanding of frontend development principles and techniques. I am proficient in creating responsive and user-friendly web interfaces using HTML and CSS. I have a strong command of JavaScript, enabling me to develop interactive and dynamic web applications. My knowledge of TypeScript allows me to write scalable and maintainable code with static typing.Moreover, I am experienced in working with popular frontend frameworks such as React, which enables me to build efficient and modular applications. I have also gained expertise in backend development using Node.js and Express, allowing me to create robust server-side applications and RESTful APIs.Overall, my education and training have equipped me with a diverse skill set and a deep understanding of frontend development and related technologies. I am excited to apply my knowledge and contribute to impactful projects in the field.";

  educationPage.append(educationText);

  root.innerHTML = ""; // Clear root content
  //add a root height of 200vh to make the page scrollable only here
  root.style.height = "160vh";
  root.append(createHeader(), educationPage, createNavBar()); // Rebuild the content

  buttonHandler();

  return educationPage;
}

export function createPortfolio() {
  const portfolioPage = createEl("div");
  portfolioPage.classList.add("portfolio-page");

  const portfolioText = createEl("div");
  portfolioText.classList.add("portfolio-text");
  portfolioText.innerText = "This is my portfolio page where I will showcase my projects. Stay tuned!";

  portfolioPage.append(portfolioText);

  root.innerHTML = ""; // Clear root content
  root.style.height = "100vh";
  root.append(createHeader(), portfolioPage, createNavBar()); // Rebuild the content

  buttonHandler();

  return portfolioPage;
}

export function createExperience() {
  const experiencePage = createEl("div");
  experiencePage.classList.add("experience-page");

  const experienceText = createEl("div");
  experienceText.classList.add("experience-text");
  experienceText.innerText = "This is my experience page where I will showcase my jobs. Stay tuned! ";

  experiencePage.append(experienceText);

  root.innerHTML = ""; // Clear root content
  root.style.height = "100vh";
  root.append(createHeader(), experiencePage, createNavBar()); // Rebuild the content

  buttonHandler();

  return experiencePage;
}

export function createContact() {
  const contactPage = createEl("div");
  contactPage.classList.add("contact-page");

  const contactText = createEl("div");
  contactText.classList.add("contact-text");
  contactText.innerText = "This is my contact page where I will showcase my contacts. Stay tuned! ";

  contactPage.append(contactText);

  root.innerHTML = ""; // Clear root content
  root.style.height = "100vh";
  root.append(createHeader(), contactPage, createNavBar()); // Rebuild the content

  buttonHandler();

  return contactPage;
}


