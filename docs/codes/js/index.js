const countdown = () => {
  const now = new Date().getTime();
  const year = new Date().getFullYear();
  const targetDate = new Date(`May 24, ${year} 01:49:00`).getTime();
    // const targetDate = new Date(`June 27, ${year} 00:00:00`).getTime();

  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML =
      "Happy Birthday dear 🎉<br>😘🥰🎂";
    setTimeout(() => {
      window.location.href = "./note.html";
    }, 5000);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
};

countdown(); // initial call
setInterval(countdown, 1000);
