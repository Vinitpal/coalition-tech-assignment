/* 
<!-- ------------------------- -->
<!-- navbar -->
<!-- ------------------------- --> 
*/

const navbar = document.querySelector(".navbar");

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.classList.remove("navbar-transparent");
    navbar.classList.add("navbar-white");
    if (window.location.pathname === "/index.html") {
      navbar.classList.remove("navbar-hidden");
    }
  } else {
    navbar.classList.add("navbar-transparent");
    navbar.classList.remove("navbar-white");
    if (window.location.pathname === "/index.html") {
      navbar.classList.add("navbar-hidden");
    }
  }
}

/* 
<!-- ------------------------- -->
<!-- history -->
<!-- ------------------------- --> 
*/
const history = document.querySelector(".history");
const tabsSection = document.querySelector(".tabs-section");

function historyFunction() {
  const top = history.getBoundingClientRect().top;
  if (top <= 1) {
    history.classList.add("backrgound-fixed");
  } else {
    history.classList.remove("backrgound-fixed");
  }
}

window.onscroll = function () {
  scrollFunction();
  historyFunction();
};

/* 
<!-- ------------------------- -->
<!-- tabs -->
<!-- ------------------------- --> 
*/

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;
    const targetTab = document.querySelector(target);
    const tabContent = document.querySelectorAll(".tab-body");

    tabContent.forEach((tab) => {
      tab.classList.remove("active");
    });

    targetTab.classList.add("active");

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");
  });
});
