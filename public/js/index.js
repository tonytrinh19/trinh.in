// Elements
const blogButton = document.querySelector("#blog-btn");

blogButton.addEventListener("click", (e) => {
  console.log("hello");
  e.preventDefault();
  window.location.href = "./blog.html";
});
