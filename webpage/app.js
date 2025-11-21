const reset = () => {
  let cards = Array.from(document.querySelectorAll(".card"));
  for (const card of cards) {
    card.style.width = "";
    const txtDiv = card.querySelector(".txt");
    if (txtDiv) {
      txtDiv.style.display = "";
      txtDiv.style.opacity = "";
      txtDiv.style.marginTop = "";
    }
  }
  main.style.backgroundColor = "";
};
const showCard = (event) => {
  reset(); 
  const target = event.currentTarget;
  target.style.width = "400px";
  let txtDiv = target.querySelector(".txt");
  if (txtDiv) {
    txtDiv.style.display = "flex";
    txtDiv.style.flexDirection = "column";
    txtDiv.style.textAlign = "left";
    txtDiv.style.justifyContent = "flex-end";
    txtDiv.style.marginTop = "auto";
    txtDiv.style.width = "70%";
    txtDiv.style.padding = "20px";
  }
  const cardId = target.id;
  if (cardBackgrounds[cardId]) {
    main.style.backgroundColor = cardBackgrounds[cardId];
    target.style.backgroundColor = cardBackgrounds[cardId];
    target.style.color = cardFontColors[cardId] || "inherit";
    const footer = document.querySelector('.content.footer');
    if (footer) {
      footer.style.backgroundColor = cardBackgrounds[cardId];
      footer.style.color = footerFontColors[cardId] || "inherit";
    }
  }
};
const cardBackgrounds = {
  c1: "#131B2E",
  c2: "#E9F1F8",
  c3: "#BCB7A2",
  c4: "#4C2C27",
  c5: "#B0CECE"
};

const cardFontColors = {
  c1: "#F5F7FA",
  c2: "#1A4B8F",
  c3: "#2C2C2C",
  c4: "#FFD700",
  c5: "#1A4B8F"
};

const footerFontColors = {
  c1: "#FFD700",
  c2: "#131B2E",
  c3: "#FFFFFF",
  c4: "#F5F7FA",
  c5: "#2C2C2C"
};
const allCards = document.querySelectorAll(".card");
const main = document.querySelector(".main");
allCards.forEach((card) => {
  card.addEventListener("click", showCard);
});
