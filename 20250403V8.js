document.addEventListener("DOMContentLoaded", () => {
  const packs = [
    {
      name: "Pack S 🎈",
      price: "€25",
      info: "Bevat 100 verfkogels per persoon. Perfect voor kleine groepen die willen kennismaken met paintball.",
      url: "https://booking.yoplanning.pro/..."
    },
    {
      name: "Pack M 🔥",
      price: "€32",
      info: "Bevat 200 verfkogels per persoon. Ideaal voor wie echt wil knallen zonder snel bij te kopen.",
      url: "https://booking.yoplanning.pro/..."
    },
    {
      name: "Pack L ⚡",
      price: "€39",
      info: "Bevat 300 verfkogels per persoon. Voor echte fanatiekelingen die tactiek en actie willen combineren.",
      url: "https://booking.yoplanning.pro/..."
    },
    {
      name: "Pack XXL 🚀🚀🚀",
      price: "€47",
      info: "Bevat 400 verfkogels per persoon. Dit is het ultieme all-in paintballpakket voor grote groepen.",
      url: "https://booking.yoplanning.pro/..."
    }
  ];

  const container = document.createElement("div");
  container.className = "paintball-boxes";

  packs.forEach((pack, index) => {
    const card = document.createElement("div");
    card.className = "paintball-pack";

    card.innerHTML = `
      <div class="info-side" data-index="${index}">ℹ️ Info</div>
      <div class="book-side">
        <h3>${pack.name}</h3>
        <p>${pack.price}</p>
        <a href="${pack.url}" target="_blank" class="btn-book">Boek hier</a>
      </div>
    `;

    container.appendChild(card);
  });

  const mount = document.getElementById("paintball-booking");
  mount.appendChild(container);

  const contact = document.createElement("p");
  contact.innerHTML = \`Groepen groter dan 26? Contacteer ons via e-mail:<br>
    <a href="mailto:souria@ice-mountain.com">souria@ice-mountain.com</a>\`;
  contact.style.textAlign = "center";
  contact.style.marginTop = "2rem";
  contact.style.fontWeight = "bold";
  mount.appendChild(contact);

  // Popups
  packs.forEach((pack, index) => {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.id = `popup-${index}`;
    popup.innerHTML = `
      <div class="popup-content">
        <span class="popup-close" data-close="${index}">&times;</span>
        <h3>${pack.name}</h3>
        <p>${pack.info}</p>
      </div>
    `;
    document.body.appendChild(popup);
  });

  document.querySelectorAll(".info-side").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const i = e.currentTarget.dataset.index;
      document.getElementById(`popup-${i}`).classList.add("show");
    });
  });

  document.querySelectorAll(".popup-close").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const i = e.currentTarget.dataset.close;
      document.getElementById(`popup-${i}`).classList.remove("show");
    });
  });
});
