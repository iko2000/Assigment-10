const btnShoot = document.querySelector(".shoot-btn");

const bullet = document.querySelector(".bullet");
const shopBox = document.querySelector(".shop-box");



let count = 0;
btnShoot.addEventListener("click", function () {
  shopBox.style.opacity = "1.0";
  if (count === 0) {
    bullet.classList.add("shooted");
    bullet.style.opacity = "1";

    count++;
  } else if (count === 1) {
    bullet.classList.remove("shooted");
    count--;
    bullet.style.opacity = "0";
  }
});
