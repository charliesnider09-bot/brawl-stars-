
// Brawl Stars website interactions

console.log("Welcome to Brawl Stars Hub!");

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    alert("You selected " + card.textContent.trim() + "!");
  });
});

// Welcome message
window.addEventListener("load", () => {
  console.log("Brawl Stars Hub is ready!");
});
