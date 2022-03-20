// <---------- Change NavBar on scroll --------->

const navbar = document.querySelector(".navbar");

window.onscroll = function () {
  var top = window.scrollY;

  if (top >= 20) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

//<------------- Slide content ---------->

const contents = document.querySelector(".contents").children;
const contentsCon = document.querySelector(".contents");
const nextContent = document.querySelector(".next-btn");
const prevContent = document.querySelector(".prev-btn");

let index = 0;

nextContent.addEventListener("click", function () {
  next();
});

prevContent.addEventListener("click", function () {
  prev();
});

function prev() {
  if (index == 0) {
    index = contents.length - 1;
  } else {
    index--;
  }

  changeContent();
}

function next() {
  if (index >= contents.length - 1) {
    index = 0;
  } else {
    index++;
  }

  changeContent();
}

function changeContent() {
  for (i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
  }
  contents[index].classList.add("active");
}

let start;
let b;

contentsCon.addEventListener("touchstart", (e) => {
  start = e.clinetX;
});

contentsCon.addEventListener("touchover", (e) => {
  e.preventDefault();
  let touch = e.clinetX;
  b = start - touch;
});

contentsCon.addEventListener("touchend", () => {
  if (b > 0) {
    next();
  } else {
    prev();
  }
});

contentsCon.addEventListener("dragstart", (e) => {
  start = e.clinetX;
});

contentsCon.addEventListener("dragover", (e) => {
  e.preventDefault();
  let touch = e.clinetX;
  b = start - touch;
});

contentsCon.addEventListener("dragend", () => {
  if (b > 0) {
    next();
  } else {
    prev();
  }
});

setInterval(() => {
  next();
}, 10000);

//  <-----------  Change popular product -------->
const ptLists = document.querySelectorAll(".pt-list");

var changeList = function (manual) {
  ptLists.forEach((ptList) => {
    ptList.classList.remove("active");
  });
  ptLists[manual].classList.add("active");
};

ptLists.forEach((ptList, i) => {
  ptList.addEventListener("click", () => {
    changeList(i);
  });
});
