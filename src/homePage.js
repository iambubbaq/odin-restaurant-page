import BeefandEggIMG from "./img/BeefandEgg.jpg";

function homePage() {
  //setup page content div
  let content = document.getElementById("content");
  let pageContent = document.createElement("div");
  pageContent.id = "pageContent";

  //create and append header
  let header = document.createElement("h1");
  header.textContent = "Shǐshī Buffet Home";
  pageContent.appendChild(header);

  //create and append image
  let img = document.createElement("img");
  img.src = BeefandEggIMG;
  img.classList.add("restaurantIMG");
  img.height = "200";
  img.width = "300";
  pageContent.appendChild(img);

  //create and append slogan
  let slogan = document.createElement("p");
  slogan.textContent = "This Chinese Buffet will have coming back each week!";
  pageContent.appendChild(slogan);

  //append page content to main div
  content.appendChild(pageContent);
}

export default homePage;
