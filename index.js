document.addEventListener("DOMContentLoaded", function () {
  const playButtonHome = document.getElementById("playbuttonhome");
  const playButton = document.getElementById("playbutton");
  const overlay = document.getElementById("overlay");
  //   const audio = document.getElementById("audio");

  playButtonHome.addEventListener("click", function () {
    console.log("clicked");
    overlay.classList.remove("hidden");
    //   audio.play();
  });
});

function closeOverlay() {
  overlay.classList.add("hidden");
  // audio.pause();
}
