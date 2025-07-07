const video = document.getElementById("video");
const progressBarr = document.getElementById("progressBar");

function updateProgress() {
if (video.duration) {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = percent + "%";
}

requestAnimationFrame(updateProgress); 
}

video.addEventListener("play", () => {
    requestAnimationFrame(updateProgress);
});

const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');

menuIcon.addEventListener('click', (e) => {
  e.preventDefault();
  sideMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});

document.addEventListener('click', (e) => {
  const isClickInside = sideMenu.contains(e.target) || menuIcon.contains(e.target);
  if (!isClickInside) {
    sideMenu.classList.remove('active');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("preVendaForm");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
        message.textContent = "Por favor, insira um e-mail válido.";
        message.className = "form-message error";
        messageTimeout = setTimeout(() => {
          message.textContent = "";
          message.className = "form-message";
        }, 3000);
        return;
    }

    message.textContent = "Inscrito com sucesso!";
    message.className = "form-message success";

    messageTimeout = setTimeout(() => {
      message.textContent = "";
      message.className = "form-message";
    }, 3000);
  });

    function validateEmail(email) {
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return re.test(email.toLowerCase());
    }
});