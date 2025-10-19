function setLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    const value = translations[lang][key];

    if (!value) return;

    if (key === "menuImg") {
      el.innerHTML = `<img src="${value}" alt="Menu Image">`;
    } else {
      el.textContent = value;
    }
  });
}

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

document.addEventListener("click", (event) => {
  const menu= document.getElementById("navLinks");
  const button = document.querySelector(".hamburger");

  if (menu.classList.contains("show") && !menu.contains(event.target) && event.target !== button) {
    menu.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", () => setLanguage("en"));