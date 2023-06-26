import { createEl } from "./utils.js";

const root = document.querySelector("#root");
const body = document.querySelector("body");

let navBarVisible = true;

export function createHeader() {
  const header = createEl("header");
  const h1 = createEl("h1");
  h1.innerText = "Portfolio";
  header.append(h1);

  const menuButton = createEl("button");
  menuButton.classList.add("menu-button");
  menuButton.innerText = "Menu";
  header.append(menuButton);

  function updateMenuButtonVisibility() {
    if (window.innerWidth < 600) {
      menuButton.style.display = "block";
      hideNavBar();
    } else {
      menuButton.style.display = "none";
      showNavBar();
    }
  }

  function hideNavBar() {
    if (navBarVisible) {
      const navBar = document.getElementById("navbar");
      if (navBar) {
        navBar.style.display = "none";
        navBarVisible = false;
      }
    }
  }

  function showNavBar() {
    if (!navBarVisible) {
      const navBar = document.getElementById("navbar");
      if (navBar) {
        navBar.style.display = "block";
        navBarVisible = true;
      }
    }
  }

  menuButton.addEventListener("click", toggleMenu)

  updateMenuButtonVisibility();
  window.addEventListener("resize", updateMenuButtonVisibility);


  // Define an array of menu items
  const menuItems = [
    { text: "Home" },
    { text: "Education" },
    { text: "Portfolio" },
    { text: "Experience" },
    { text: "Contact" },
  ];


  createMobileMenu(menuItems); // Pass the menu items to createMobileMenu

  return header;
}
let mobileMenuVisible = false; // Track the visibility state of the mobile menu
let mobileMenu = null; // Track the reference to the mobile menu element

export function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    if (mobileMenu.style.display === "none") {
      mobileMenu.style.display = "block";
    } else {
      mobileMenu.style.display = "none";
    }
  } else {
    mobileMenu = createMobileMenu();
    mobileMenuVisible = true;
  }
}

export function createMobileMenu() {
  const mobileMenu = createEl("div");
  mobileMenu.setAttribute("id", "mobile-menu");

  const mobileMenuEl1 = createEl("div");
  mobileMenuEl1.classList.add("mobile-menu-el");
  mobileMenuEl1.innerText = "Home";
  mobileMenuEl1.id = "upper-item-mobile";

  const mobileMenuEl2 = createEl("div");
  mobileMenuEl2.classList.add("mobile-menu-el");
  mobileMenuEl2.innerText = "Education";

  const mobileMenuEl3 = createEl("div");
  mobileMenuEl3.classList.add("mobile-menu-el");
  mobileMenuEl3.innerText = "Portfolio";

  const mobileMenuEl4 = createEl("div");
  mobileMenuEl4.classList.add("mobile-menu-el");
  mobileMenuEl4.innerText = "Experience";

  const mobileMenuEl5 = createEl("div");
  mobileMenuEl5.classList.add("mobile-menu-el");
  mobileMenuEl5.innerText = "Contact";
  mobileMenuEl5.id = "lower-item-mobile";

  mobileMenu.append(
    mobileMenuEl1,
    mobileMenuEl2,
    mobileMenuEl3,
    mobileMenuEl4,
    mobileMenuEl5
  );
  root.append(mobileMenu);

  mobileMenuEl1.addEventListener("click", () => {
    handleMobileMenuClick("Home");
    toggleMenu();
  });
  mobileMenuEl2.addEventListener("click", () => {
    handleMobileMenuClick("Education");
    toggleMenu();
  });
  mobileMenuEl3.addEventListener("click", () => {
    handleMobileMenuClick("Portfolio");
    toggleMenu();
  });
  mobileMenuEl4.addEventListener("click", () => {
    handleMobileMenuClick("Experience");
    toggleMenu();
  });
  mobileMenuEl5.addEventListener("click", () => {
    handleMobileMenuClick("Contact");
    toggleMenu();
  });

  return mobileMenu;
}

function handleMobileMenuClick(selectedNavItem) {
  if (mobileMenuVisible) {
    toggleMenu(); // Hide the mobile menu
  }

  root.classList.add("slide-out"); // Apply the slide-out animation

  setTimeout(() => {
    root.innerHTML = "";

    if (selectedNavItem === "Home") {
      createMain();
    } else if (selectedNavItem === "Education") {
      createEducation();
    } else if (selectedNavItem === "Portfolio") {
      createPortfolio();
    } else if (selectedNavItem === "Experience") {
      createExperience();
    } else if (selectedNavItem === "Contact") {
      createContact();
    }

    root.classList.remove("slide-out");
    root.classList.add("slide-in"); // Apply the slide-in animation

    setTimeout(() => {
      root.classList.remove("slide-in");
    }, 500); // Adjust the timeout duration to match the animation duration in CSS
  }, 500); // Adjust the timeout duration to match the animation duration in CSS
}


export function buttonHandler(element) {
  const navEls = document.querySelectorAll(".navEl");

  navEls.forEach((navEl) => {
    navEl.addEventListener("click", (e) => {
      const selectedNavItem = e.target.innerText;

      navEls.forEach((navEl) => {
        navEl.classList.remove("active");
      });
      e.target.classList.add("active");

      root.classList.add("slide-out"); // Apply the slide-out animation

      setTimeout(() => {
        root.innerHTML = "";

        if (selectedNavItem === "Home") {
          createMain();
        } else if (selectedNavItem === "Education") {
          createEducation();
        } else if (selectedNavItem === "Portfolio") {
          createPortfolio();
        } else if (selectedNavItem === "Experience") {
          createExperience();
        } else if (selectedNavItem === "Contact") {
          createContact();
        }

        root.classList.remove("slide-out");
        root.classList.add("slide-in"); // Apply the slide-in animation

        setTimeout(() => {
          root.classList.remove("slide-in");
        }, 500); // Adjust the timeout duration to match the animation duration in CSS
      }, 500); // Adjust the timeout duration to match the animation duration in CSS
    });
  });
}

export function createNavBar() {
  const navBar = createEl("div");
  navBar.classList.add("nav-bar");
  navBar.setAttribute("id", "navbar");

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

  buttonHandler(); // Call the buttonHandler function to set up event listeners for navigation items

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

  body.style.backgroundColor = "rgb(0, 128, 255)";
  root.style.backgroundColor = "rgb(0, 128, 255)";

  root.append(main); // Rebuild the content

  buttonHandler();

  return main;
}

export function createEducation() {
  const educationPage = createEl("div");
  educationPage.classList.add("education-page");
  educationPage.style.height = "auto"; // Set the height of educationPage

  const educationTitle = createEl("div");
  educationTitle.classList.add("education-title");
  educationTitle.innerText = "My Educations";

  const educationText = createEl("div");
  educationText.classList.add("education-text");
  educationText.innerText =
    "I have completed my Bachelor's degree in Budapest University of Technology and Economics. To further enhance my skill set and pursue my passion for frontend development, I attended a Frontend Developer school at CodeCool. During this program, I received comprehensive training in various technologies and frameworks, including HTML, CSS, JavaScript, TypeScript, React, Node.js, Express, and REST API development.Through my education and practical experience, I have developed a solid understanding of frontend development principles and techniques. I am proficient in creating responsive and user-friendly web interfaces using HTML and CSS. I have a strong command of JavaScript, enabling me to develop interactive and dynamic web applications. Moreover, I am experienced in working with popular frontend frameworks such as React, which enables me to build efficient and modular applications. I have also gained expertise in backend development using Node.js and Express, allowing me to create robust server-side applications and RESTful APIs.Overall, my education and training have equipped me with a diverse skill set and a deep understanding of frontend development and related technologies. I am excited to apply my knowledge and contribute to impactful projects in the field.";

  educationPage.append(educationTitle, educationText);

  // Clear the existing content inside root
  root.innerHTML = "";
  root.style.backgroundColor = "rgba(0, 130, 86, 1)";
  body.style.backgroundColor = "rgba(0, 130, 86, 1)";

  root.append(educationPage); // Rebuild the content

  buttonHandler();
  const header = createHeader();
  header.style.backgroundColor = "rgba(0, 130, 86, 1)";


  return educationPage;
}

export function createPortfolio() {
  const portfolioPage = createEl("div");
  portfolioPage.classList.add("portfolio-page");

  const portfolioText = createEl("a");
  portfolioText.setAttribute("href", "https://wishversum.onrender.com/");
  portfolioText.classList.add("portfolio-title");
  portfolioText.innerText = "https://wishversum.onrender.com/";

  const portfolioText2 = createEl("div");
  portfolioText2.classList.add("portfolio-text");
  portfolioText2.innerText =
    "This is an ongoing private project that primarily utilizes Vanilla JavaScript, modular components, and incorporates some Node.js functionality for form implementation.";

  portfolioPage.append(portfolioText, portfolioText2);

  root.innerHTML = ""; // Clear root content
  root.style.height = "100vh";

  body.style.backgroundColor = "rgba(138, 51, 237, 1)";
  root.style.backgroundColor = "rgba(138, 51, 237, 1)";

  root.append(portfolioPage); // Rebuild the content

    buttonHandler();

  return portfolioPage;
}

export function createExperience() {
  const experiencePage = createEl("div");
  experiencePage.classList.add("experience-page");

  const experienceText = createEl("div");
  experienceText.classList.add("experience-text");
  experienceText.innerText = "My Experiences ";

  const sapContainer = createEl("div");
  sapContainer.classList.add("sap-container");

  const experienceDate = createEl("div");
  experienceDate.classList.add("experience-date");
  experienceDate.innerText = "2021 - 2022";

  const experienceTitle = createEl("div");
  experienceTitle.classList.add("experience-title");
  experienceTitle.innerText = "SAP Business Analyst";

  const experienceCompany = createEl("div");
  experienceCompany.classList.add("experience-company");
  experienceCompany.innerText = "KPMG";

  const sapDetails = createEl("div");
  sapDetails.classList.add("sap-details");
  sapDetails.innerText =
    "Over these Period, I had been on a major implementation project. My tasks included assessing client needs, facilitating communication between them and developers, ensuring new requests align with client requirements, and participating in client presentations. This project has allowed me to contribute to successful goal implementation with clear and consistent communication.";

  sapContainer.append(
    experienceDate,
    experienceTitle,
    experienceCompany,
    sapDetails
  );

  const deloitteContainer = createEl("div");
  deloitteContainer.classList.add("deloitte-container");

  const experienceDate2 = createEl("div");
  experienceDate2.classList.add("experience-date");
  experienceDate2.innerText = "2022";

  const experienceTitle2 = createEl("div");
  experienceTitle2.classList.add("experience-title");
  experienceTitle2.innerText = "Audit Analyst";

  const experienceCompany2 = createEl("div");
  experienceCompany2.classList.add("experience-company");
  experienceCompany2.innerText = "Deloitte";

  const deloitteDetails = createEl("div");
  deloitteDetails.classList.add("deloitte-details");
  deloitteDetails.innerText =
    "As a Junior Auditor at Deloitte, I had the chance to dive deeper into the world of finance, working closely with experienced team members to analyze yearly reports. My time at Deloitte taught me the importance of integrity, goal achievement, teamwork, and familiarized me with various financial software applications";

  deloitteContainer.append(
    experienceDate2,
    experienceTitle2,
    experienceCompany2,
    deloitteDetails
  );

  const codecoolContainer = createEl("div");
  codecoolContainer.classList.add("codecool-container");

  const experienceDate3 = createEl("div");
  experienceDate3.classList.add("experience-date");
  experienceDate3.innerText = "2023";

  const experienceTitle3 = createEl("div");
  experienceTitle3.classList.add("experience-title");
  experienceTitle3.innerText = "Frontend Developer";

  const experienceCompany3 = createEl("div");
  experienceCompany3.classList.add("experience-company");
  experienceCompany3.innerText = "CodeCool";

  const codecoolDetails = createEl("div");
  codecoolDetails.classList.add("codecool-details");
  codecoolDetails.innerText =
    "During my tenure at Codecool, I have acquired extensive experience in both individual and collaborative web development, thereby fostering my proficiency in a wide range of technologies such as HTML5, CSS3, SVG, JavaScript, React.js, Node.js / NPM, Express.js. Additionally, I have employed Git and GitHub as valuable tools for version control and collaborative work. This comprehensive course has equipped me with a solid foundation in web development, empowering me to construct dynamic websites and applications with ease. In particular, the course structure incorporated biweekly team projects, which not only honed my teamwork skills but also provided valuable opportunities to showcase our collective efforts before esteemed Mentors. Our collaborative endeavors primarily focused on real-world tasks, allowing us to actively troubleshoot and resolve complex problems as a cohesive unit. For a more in-depth review of my work, I invite you to peruse my GitHub page at: https://github.com/balazstrencsenyi.";

  codecoolContainer.append(
    experienceDate3,
    experienceTitle3,
    experienceCompany3,
    codecoolDetails
  );

  experiencePage.append(
    experienceText,
    sapContainer,
    deloitteContainer,
    codecoolContainer
  );

  root.innerHTML = ""; // Clear root content

  body.style.backgroundColor = "rgba(146, 47, 182, 1)";
  root.style.backgroundColor = "rgba(146, 47, 182, 1)";

  root.style.height = "100vh";
  root.append(experiencePage); // Rebuild the content

  buttonHandler();

  return experiencePage;
}

export function createContact() {
  const contactPage = createEl("div");
  contactPage.classList.add("contact-page");

  const linkedinContainer = createEl("a");
  linkedinContainer.setAttribute(
    "href",
    "https://www.linkedin.com/in/balazstrencsenyi/"
  );
  linkedinContainer.classList.add("linkedin-container");

  const linkedinIcon = createEl("img");
  linkedinIcon.classList.add("linkedin-icon");
  linkedinIcon.setAttribute("src", "linkedin.png");

  linkedinContainer.append(linkedinIcon);

  const githubContainer = createEl("a");
  githubContainer.setAttribute("href", "https://github.com/balazstrencsenyi");
  githubContainer.classList.add("github-container");

  const githubIcon = createEl("img");
  githubIcon.classList.add("github-icon");
  githubIcon.setAttribute("src", "github.png");

  githubContainer.append(githubIcon);

  const phoneContainer = createEl("a");
  phoneContainer.setAttribute("href", "+36302631920");
  phoneContainer.classList.add("phone-container");

  const phoneIcon = createEl("img");
  phoneIcon.classList.add("phone-icon");
  phoneIcon.setAttribute("src", "phone.png");

  phoneContainer.append(phoneIcon);

  const emailContainer = createEl("a");
  emailContainer.setAttribute("href", "balazs.codecool@gmail.com");
  emailContainer.classList.add("email-container");

  const emailIcon = createEl("img");
  emailIcon.classList.add("email-icon");
  emailIcon.setAttribute("src", "gmail.png");

  emailContainer.append(emailIcon);

  contactPage.append(
    linkedinContainer,
    githubContainer,
    phoneContainer,
    emailContainer
  );

  root.innerHTML = ""; // Clear root content
  body.style.backgroundColor = "RGBA(71, 77, 191, 1)";
  root.style.backgroundColor = "RGBA(71, 77, 191, 1)";

  root.style.height = "100vh";
  root.append(contactPage); // Rebuild the content

  buttonHandler();

  return contactPage;
}

export function createRightNav() {
  const rightNav = createEl("div");
  rightNav.classList.add("right-nav");

  const rightNavEl1Container = createEl("a");
  rightNavEl1Container.setAttribute(
    "href",
    "https://www.linkedin.com/in/balazstrencsenyi/"
  );
  rightNavEl1Container.classList.add("right-nav-el-container");

  const rightNavEl1 = createEl("img");
  rightNavEl1.classList.add("right-nav-el");
  rightNavEl1.setAttribute("src", "linkedin.png");

  rightNavEl1Container.append(rightNavEl1);

  const rightNavEl2Container = createEl("a");
  rightNavEl2Container.setAttribute(
    "href",
    "https://github.com/balazstrencsenyi"
  );
  rightNavEl2Container.classList.add("right-nav-el-container");
  rightNavEl2Container.id = "right-nav-el2-container";

  const rightNavEl2 = createEl("img");
  rightNavEl2.classList.add("right-nav-el");
  rightNavEl2.setAttribute("src", "github.png");

  rightNavEl2Container.append(rightNavEl2);

  rightNav.append(rightNavEl1Container, rightNavEl2Container);
  root.append(rightNav);

  function updateRightNavVisibility() {
    if (window.innerWidth < 600) {
      rightNav.style.display = "none";
    } else {
      rightNav.style.display = ""; // Reset the display property to its default value
    }
  }

  updateRightNavVisibility();
  window.addEventListener("resize", updateRightNavVisibility);

  return rightNav;
}
