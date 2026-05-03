const contactLinks = {
  github: "https://github.com/",
  telegram: "https://t.me/",
  email: "mailto:hello@nanoclaw.website",
  discord: "https://discord.com/",
};

const translations = {
  ru: {
    navAlias: "Смысл",
    navLayers: "Слои",
    navContact: "Связь",
    heroEyebrow: "Nic Anatoly alias",
    heroCopy: "Псевдоним Анатолия. Точность, энергия и цифровой след.",
    heroContact: "Связаться",
    domainStatus: "domain secured",
    aliasTitle: "Имя звучит как тонкий след по стеклу.",
    aliasText:
      "NanoClaw соединяет микроскопическую точность nano и резкий, узнаваемый след claw. Это ник для цифрового пространства: быстрый, чистый, технологичный и запоминающийся.",
    layersTitle: "Многослойная айдентика",
    nanoText: "Точность, микроструктура, интеллект.",
    clawText: "След, энергия, решительность.",
    anatolyText: "Человеческое ядро, стиль, характер.",
    contactTitle: "Оставь след. Напиши NanoClaw.",
    contactText:
      "Быстрый вход в коммуникацию: репозитории, сообщения, почта и рабочие каналы в одном цифровом контуре.",
  },
  en: {
    navAlias: "Alias",
    navLayers: "Layers",
    navContact: "Contact",
    heroEyebrow: "Nic Anatoly alias",
    heroCopy: "Anatoly's alias. Precision, energy, and a digital trace.",
    heroContact: "Contact",
    domainStatus: "domain secured",
    aliasTitle: "A name like a fine trace across glass.",
    aliasText:
      "NanoClaw combines the microscopic precision of nano with the sharp, memorable trace of a claw. It is an alias built for digital space: fast, clean, technological, and distinctive.",
    layersTitle: "Layered identity",
    nanoText: "Precision, microstructure, intelligence.",
    clawText: "Trace, energy, decisiveness.",
    anatolyText: "Human core, style, character.",
    contactTitle: "Leave a trace. Reach NanoClaw.",
    contactText:
      "A fast entry into communication: repositories, messages, email, and working channels in one digital circuit.",
  },
};

const depthLayers = [...document.querySelectorAll(".depth-layer")];
const canvas = document.querySelector(".particle-field");
const ctx = canvas.getContext("2d");
const langButtons = [...document.querySelectorAll(".lang-button")];
const translatable = [...document.querySelectorAll("[data-i18n]")];

let pointerX = 0;
let pointerY = 0;
let width = 0;
let height = 0;
let particles = [];
let scrollRatio = 0;

function applyContacts() {
  Object.entries(contactLinks).forEach(([key, href]) => {
    document.querySelectorAll(`[data-contact-link="${key}"]`).forEach((link) => {
      link.href = href;
    });
  });
}

function setLanguage(language) {
  document.documentElement.lang = language;
  translatable.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[language][key];
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
  });
}

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.min(115, Math.max(42, Math.floor(width / 15)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 1.9 + 0.35,
    speed: Math.random() * 0.36 + 0.08,
    drift: Math.random() * 0.45 + 0.12,
    hue: [42, 162, 184, 318, 9][Math.floor(Math.random() * 5)],
  }));
}

function updateDepthLayers() {
  depthLayers.forEach((layer) => {
    const depth = Number(layer.dataset.depth || 0);
    const x = pointerX * depth * 150;
    const y = pointerY * depth * 120 + scrollRatio * depth * -90;
    layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}

function moveLayers(event) {
  pointerX = event.clientX / window.innerWidth - 0.5;
  pointerY = event.clientY / window.innerHeight - 0.5;
  updateDepthLayers();
}

function updateScroll() {
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  scrollRatio = window.scrollY / max;
  updateDepthLayers();
}

function drawParticles() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach((particle) => {
    particle.y -= particle.speed;
    particle.x += Math.sin((particle.y + pointerX * 250) * 0.012) * particle.drift;

    if (particle.y < -10) {
      particle.y = height + 10;
      particle.x = Math.random() * width;
    }

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${particle.hue}, 96%, 68%, 0.72)`;
    ctx.fill();
  });

  requestAnimationFrame(drawParticles);
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.14 },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

window.addEventListener("resize", resizeCanvas);
window.addEventListener("pointermove", moveLayers);
window.addEventListener("scroll", updateScroll, { passive: true });

applyContacts();
setLanguage("ru");
resizeCanvas();
updateScroll();
initReveal();
drawParticles();
