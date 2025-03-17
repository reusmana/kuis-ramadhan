document.addEventListener("DOMContentLoaded", function () {
  const playButtonHome = document.getElementById("playbuttonhome");
  const playButton = document.getElementById("playbutton");
  const overlay = document.getElementById("overlay");
  const reset = document.getElementById("resetStorage");
  //   const audio = document.getElementById("audio");

  playButtonHome.addEventListener("click", function () {
    console.log("clicked");
    overlay.classList.remove("hidden");
    //   audio.play();
  });

  reset.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
  });
});

function closeOverlay() {
  overlay.classList.add("hidden");
  // audio.pause();
}
