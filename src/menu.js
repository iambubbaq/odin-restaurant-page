function menuPage() {
  //setup page content div
  let content = document.getElementById("content");
  let pageContent = document.createElement("div");
  pageContent.id = "pageContent";

  //create and append header
  let header = document.createElement("h1");
  header.textContent = "Menu";
  pageContent.append(header);

  //create and append menu items
  let menu = document.createElement("ul");
  menu.classList.add("menuList");
  let menuItem1 = document.createElement("li");
  let menuItem2 = document.createElement("li");
  let menuItem3 = document.createElement("li");
  menuItem1.textContent =
    "Lunch Buffet - Enjoy full menu in a buffet style for a discounted price!";
  menuItem2.textContent = "Dinner Buffet - Enjoy full menu in a buffet style!";
  menuItem3.textContent =
    "Dinner à la carte - Select from our wide range of dishes as you please for dine in or carry out!";
  menu.append(menuItem1);
  menu.append(menuItem2);
  menu.append(menuItem3);
  pageContent.append(menu);

  //append page content to main content div
  content.append(pageContent);
}

export default menuPage;
