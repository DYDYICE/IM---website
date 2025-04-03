document.addEventListener("DOMContentLoaded", () => {
  const packs = [
    {
      name: "Pack S 🎈",
      price: "Vanaf €25",
      link: "https://booking.yoplanning.pro/6c54d08d-219e-4b3c-80f7-c4ad793a85cc/"
    },
    {
      name: "Pack M 🔥",
      price: "Vanaf €32",
      link: "https://booking.yoplanning.pro/c9b38588-7bc8-4b13-bf73-5d89f682d894/"
    },
    {
      name: "Pack L ⚡",
      price: "Vanaf €32",
      link: "https://booking.yoplanning.pro/7d566fdf-16a4-4596-9281-b594a8b51ed9/"
    },
    {
      name: "Pack XXL 🚀🚀🚀",
      price: "Vanaf €32",
      link: "https://booking.yoplanning.pro/b1262da8-2756-44cc-83ec-abb357b5efae/"
    }
  ];

  const container = document.createElement("div");
  container.className = "paintball-boxes";

  packs.forEach((pack) => {
    const card = document.createElement("a");
    card.className = "paintball-pack";
    card.href = pack.link;
    card.target = "_blank";

    card.innerHTML = `
      <h3>${pack.name}</h3>
      <p>2u actie · ${pack.price}</p>
      <div class="btn-book">Réserver</div>
    `;

    container.appendChild(card);
  });

  const mount = document.getElementById("paintball-booking");
  mount.appendChild(container);

  // Add contact info after cards
  const contact = document.createElement("p");
  contact.innerHTML = `Groepen groter dan 26? Contacteer ons via e-mail:<br>
    <a href="mailto:clement@ice-mountain.com">clement@ice-mountain.com</a> (FR) — 
    <a href="mailto:souria@ice-mountain.com">souria@ice-mountain.com</a> (NL)`;
  contact.style.textAlign = "center";
  contact.style.marginTop = "2rem";
  contact.style.fontWeight = "bold";

  mount.appendChild(contact);
});
