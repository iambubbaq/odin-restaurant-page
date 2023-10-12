function contactPage() {
  //setup page content div
  let content = document.getElementById("content");
  let pageContent = document.createElement("div");
  pageContent.id = "pageContent";

  //create and append header
  let header = document.createElement("h1");
  header.textContent = "Contact Information";
  pageContent.append(header);

  //create and append contact info
  let contact = document.createElement("ul");
  contact.classList.add("contactInfo");
  let phone = document.createElement("li");
  let email = document.createElement("li");
  let location = document.createElement("li");
  phone.textContent = "PHONE: 123-456-7890";
  email.textContent = "EMAIL: delicious@buffet.yum";
  location.textContent = "ADDRESS: 123 Only in Dreams, Anywhere, 12345";
  contact.append(phone);
  contact.append(email);
  contact.append(location);
  pageContent.append(contact);

  //append page content to main content div
  content.append(pageContent);
}

export default contactPage;
