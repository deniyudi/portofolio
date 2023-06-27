// tambah kelas active pada class navbar-nav
const navbarNav = document.querySelector(".navbar-nav");

// bila diklik muncul menu

document.querySelector("#navbar-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// hilangin klik pada ketika navbar samping muncul

const menu = document.querySelector("#navbar-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
