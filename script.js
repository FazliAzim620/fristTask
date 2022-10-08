var slide = document.getElementsByClassName("rightSide");
var slideList = document.getElementsByClassName("slideList");
var ol = document.getElementById("ol");
var showList = document.getElementsByClassName("toggleList");

var totalslide = slide.length;

var index = 0;
var sideItem = document.querySelectorAll(".slideList");
var harrow = document.querySelectorAll(".Harrow");
let x = true;
/////////////////////// scroll function
document.onscroll = function () {
  let countScr = document.body.scrollTop;
  if (countScr > 5) {
    document.getElementById("header").classList.add("headerColor");
  } else {
    document.getElementById("header").classList.remove("headerColor");
  }
};

//////////////////////// toggler show hide function
let tog = document.querySelectorAll(".toggleList>li");
let totalNav = tog.length;

document.getElementById("toggler").addEventListener("click", OpenClose);
for (let i = 0; i < totalNav; i++) {
  tog[i].onclick = OpenClose;
}
function OpenClose() {
  if (x) {
    showList[0].classList.add("open");
    x = false;
  } else {
    showList[0].classList.remove("open");
    x = true;
  }
}

sideItem.forEach((slide, ind) => {
  slide.addEventListener("click", function () {
    index = ind;
    Next();
  });
});
document.getElementById("next").addEventListener("click", function () {
  index += 1;

  Next();
});
document.getElementById("prev").addEventListener("click", function () {
  index -= 1;

  Next();
});

function Next() {
  if (index >= totalslide) {
    index = 0;
  }

  if (index < 0) {
    index = totalslide - 1;
  }
  for (i = 0; i < totalslide; i++) {
    slide[i].classList.remove("active");
    slideList[i].classList.remove("listFocus");
    harrow[i].classList.remove("ActiveArrow");
  }
  slide[index].classList.add("active");
  slideList[index].classList.add("listFocus");
  harrow[index].classList.add("ActiveArrow");

  // document.getElementById('status').innerHTML
}

// const slideImg = document.querySelector(".ulSlide>li");

// window.setInterval(() => {
//   slideImg.style.transform = "rotate(20deg)";
// }, 2000);
