document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("happybirthday-sound");

  if (bgMusic) {
    bgMusic.play().catch((err) => {
      console.warn("Autoplay failed. User interaction may be required.", err);
    });
  }
});
