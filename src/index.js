import homePage from "./homePage.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

//function for tabs
function createTabs() {
  //create tab bar div
  let content = document.getElementById("content");
  let tabBar = document.createElement("div");
  tabBar.id = "tabBar";

  //create and append tab list
  let tabList = document.createElement("ul");
  let homeTab = document.createElement("li");
  let homeTabButton = document.createElement("button");
  let menuTab = document.createElement("li");
  let menuTabButton = document.createElement("button");
  let contactTab = document.createElement("li");
  let contactTabButton = document.createElement("button");
  homeTabButton.textContent = "HOME";
  menuTabButton.textContent = "MENU";
  contactTabButton.textContent = "CONTACT";
  homeTabButton.addEventListener("click", () => {
    clearPage();
    homePage();
  });
  menuTabButton.addEventListener("click", () => {
    clearPage();
    menuPage();
  });
  contactTabButton.addEventListener("click", () => {
    clearPage();
    contactPage();
  });
  homeTab.append(homeTabButton);
  menuTab.append(menuTabButton);
  contactTab.append(contactTabButton);
  tabList.append(homeTab);
  tabList.append(menuTab);
  tabList.append(contactTab);
  tabBar.append(tabList);

  //append tab bar to main content div
  content.append(tabBar);
}

function clearPage() {
  let content = document.getElementById("content");
  let pageContent = document.getElementById("pageContent");
  content.removeChild(pageContent);
}

createTabs();
homePage();
