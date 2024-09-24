document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  const heroImage = document.querySelector(".hero-image");
  const scrollPosition = window.pageYOffset;
  heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
});

const caracteristicas = document.querySelectorAll(".caracteristica");
caracteristicas.forEach((caracteristica) => {
  caracteristica.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.03)";
    this.style.transition = "transform 0.4s ease";
  });
  caracteristica.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
  });
});

const testimoniosSlider = document.querySelector(".testimonios-slider");
let isDown = false;
let startX;
let scrollLeft;

testimoniosSlider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - testimoniosSlider.offsetLeft;
  scrollLeft = testimoniosSlider.scrollLeft;
});

testimoniosSlider.addEventListener("mouseleave", () => {
  isDown = false;
});

testimoniosSlider.addEventListener("mouseup", () => {
  isDown = false;
});

testimoniosSlider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - testimoniosSlider.offsetLeft;
  const walk = (x - startX) * 3;
  testimoniosSlider.scrollLeft = scrollLeft - walk;
});

document.querySelectorAll("header a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetID = this.getAttribute("href");
    const targetElement = document.querySelector(targetID);

    window.scrollTo({
      top:
        targetElement.offsetTop - document.querySelector("header").offsetHeight,
      behavior: "smooth",
    });
  });
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuItems = document.getElementById("menu-items");
  const navbar = document.getElementById("navbar");

  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    menuItems.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    const isClickInsideMenu = navbar.contains(event.target);
    if (!isClickInsideMenu && menuItems.classList.contains("active")) {
      menuItems.classList.remove("active");
    }
  });

  menuItems.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

//! sacado de chatgpt "como hacer que se despligue el menu con js que valide los campos. (s. f.). Chatgpt. https://chatgpt.com"
function toggleForm() {
  const formContainer = document.getElementById("form-container");
  formContainer.style.display =
    formContainer.style.display === "none" || formContainer.style.display === ""
      ? "block"
      : "none";
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Validar nombre
  if (name.length < 2) {
    alert("El nombre debe tener al menos 2 caracteres.");
    return false;
  }

  // Validar dirección
  if (address.length < 5) {
    alert("La dirección debe tener al menos 5 caracteres.");
    return false;
  }

  // Validar número de teléfono
  const phonePattern = /^[0-9]{8}$/; // Cambié a 8 dígitos como en tu código
  if (!phonePattern.test(phone)) {
    alert("El número de teléfono debe tener exactamente 8 dígitos.");
    return false;
  }

  // Validar correo electrónico
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, ingresa una dirección de correo electrónico válida.");
    return false;
  }
  alert("Gracias por comprar");
  return true; // Si todo es válido, el formulario se enviará
}
