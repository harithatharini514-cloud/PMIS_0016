const music = document.getElementById("bgMusic");
const musicControl = document.querySelector(".music-control");
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    musicControl.textContent = "🎵 Play Music";
  } else {
    music.play();
    musicControl.textContent = "⏸ Pause Music";
  }
  isPlaying = !isPlaying;
}

const form = document.getElementById("registrationForm");

const validators = {
  name: value => /^[A-Za-z ]+$/.test(value),
  age: value => value >= 5 && value <= 100,
  gender: value => value !== "",
  email: value => /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(value),
  phone: value => /^[0-9]{10}$/.test(value),
  image: value => value !== ""
};

form.querySelectorAll("input, select").forEach(input => {
  input.addEventListener("input", () => {
    const isValid = validators[input.id] ? validators[input.id](input.value) : true;
    const errorMsg = input.nextElementSibling;
    if (isValid) {
      input.style.borderColor = "green";
      errorMsg.style.display = "none";
    } else {
      input.style.borderColor = "red";
      errorMsg.style.display = "block";
    }
  });
});

form.addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;
  form.querySelectorAll("input, select").forEach(input => {
    const isValid = validators[input.id] ? validators[input.id](input.value) : true;
    const errorMsg = input.nextElementSibling;
    if (!isValid) {
      input.style.borderColor = "red";
      errorMsg.style.display = "block";
      valid = false;
    }
  });
  if (valid) {
    window.location.href = "thankyou.html"; 
  }
});
