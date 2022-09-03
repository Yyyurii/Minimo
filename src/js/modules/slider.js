export const slider = () => {
  // Для коректної роботи свайпа
  document.body.addEventListener(
    "touchstart",
    function (e) {
      if (e.target.nodeName == "CANVAS") {
        e.preventDefault();
      }
    },
    false
  );
  document.body.addEventListener(
    "touchend",
    function (e) {
      if (e.target.nodeName == "CANVAS") {
        e.preventDefault();
      }
    },
    false
  );
  document.body.addEventListener(
    "touchmove",
    function (e) {
      if (e.target.nodeName == "CANVAS") {
        e.preventDefault();
      }
    },
    false
  );
  //--------------------------//

  const images = document.querySelectorAll(".slider .slider__line img");
  const sliderLine = document.querySelector(".slider .slider__line");
  let count = 0;
  let width;

  function init() {
    width = document.querySelector(".slider").offsetWidth;
    sliderLine.style.width = width * images.length + "px";
    images.forEach((item) => {
      item.style.width = width + "px";
      if (window.innerWidth > 767) item.style.maxHeight = "510px";
      else {
        item.style.maxHeight = "none";
        item.style.height = "auto";
      }
    });
    rollSlider();
  }

  init();
  window.addEventListener("resize", init);

  function rollRight() {
    count++;
    if (count >= images.length) {
      count = 0;
    }
    rollSlider();
  }

  function rollLeft() {
    count--;
    if (count < 0) {
      count = images.length - 1;
    }
    rollSlider();
  }

  document
    .querySelector(".slider__next")
    .addEventListener("click", function () {
      rollRight();
    });

  document
    .querySelector(".slider__prev")
    .addEventListener("click", function () {
      rollLeft();
    });

  function rollSlider() {
    sliderLine.style.transform = "translate(-" + count * width + "px)";
  }

  //swipe
  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  let x1 = null;
  let y1 = null;

  function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
  }

  function handleTouchMove(event) {
    if (!x1 || !y1) {
      return false;
    }

    const touch = event.touches[0];
    let x2 = touch.clientX;
    let y2 = touch.clientY;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) rollLeft();
      else rollRight();
    }

    x1 = null;
    y1 = null;
  }
};
