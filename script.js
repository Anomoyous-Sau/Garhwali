gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* Smooth Explore Scroll */
document.getElementById("exploreBtn").addEventListener("click", () => {
  gsap.to(window, {
    duration: 1.6,
    scrollTo: "#foods",
    ease: "power3.inOut"
  });
});

/* DATA */
const content = {
  kafuli: {
    recipe: "Spinach cooked with local spices and rice flour.",
    about: "Kafuli is the most iconic Garhwali dish."
  },
  kheer: {
    recipe: "Jhangora millet cooked with milk and jaggery.",
    about: "Sweet dish eaten during festivals."
  },
  chainsoo: {
    recipe: "Roasted black gram cooked slowly.",
    about: "Protein-rich Garhwali curry."
  },
  phaanu: {
    recipe: "Mixed lentils soaked and simmered.",
    about: "Traditional village comfort food."
  },
  mandua: {
    recipe: "Finger millet flour used for roti.",
    about: "Staple grain of Uttarakhand."
  }
};

const panel = document.getElementById("detailPanel");
const panelTitle = document.getElementById("panelTitle");
const panelContent = document.getElementById("panelContent");
let currentFood = null;

/* Card click */
document.querySelectorAll(".card").forEach(card => {
  card.onclick = () => {
    currentFood = card.dataset.food;
    panelTitle.textContent = currentFood.toUpperCase();
    panelContent.textContent = content[currentFood].about;
    panel.classList.add("active");
  };
});

/* Panel buttons */
document.getElementById("showRecipe").onclick = () => {
  panelContent.textContent = content[currentFood].recipe;
};

document.getElementById("showAbout").onclick = () => {
  panelContent.textContent = content[currentFood].about;
};

document.getElementById("closePanel").onclick = () => {
  panel.classList.remove("active");
};

/* Language toggle */
let lang = "en";
document.getElementById("langToggle").onclick = () => {
  lang = lang === "en" ? "hi" : "en";
  document.querySelectorAll(".en").forEach(e => e.style.display = lang === "en" ? "block" : "none");
  document.querySelectorAll(".hi").forEach(e => e.style.display = lang === "hi" ? "block" : "none");
};

/* Theme */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};
