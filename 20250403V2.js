document.addEventListener("DOMContentLoaded", function () {
  const packs = document.querySelectorAll(".paintball-pack");

  packs.forEach((pack) => {
    pack.addEventListener("mouseenter", () => {
      pack.style.transform = "scale(1.03)";
    });
    pack.addEventListener("mouseleave", () => {
      pack.style.transform = "scale(1)";
    });
  });

  // Optional: Add an emoji dynamically based on pack size
  const headings = document.querySelectorAll(".paintball-pack h3");
  headings.forEach((h3) => {
    if (h3.textContent.includes("S")) h3.textContent += " 🎈";
    else if (h3.textContent.includes("M")) h3.textContent += " 🔥";
    else if (h3.textContent.includes("L")) h3.textContent += " 🚀";
    else if (h3.textContent.includes("XXL")) h3.textContent += " 💣";
  });
});
