const post = document.querySelector(".post");
const profile = document.querySelector(".profile");
post.addEventListener("click", () => {
  window.location.href = "detail.html";
  // console.log("post 클릭");
});

profile.addEventListener("click", () => {
  window.location.href = "profile.html";
  // console.log("profile 클릭");
});
