document.addEventListener("DOMContentLoaded", () => {
  const packs = [
    {
      name: "Pack S 🎈",
      price: "€25",
      info: "Bevat 100 verfkogels per persoon.",
      link: "https://booking.yoplanning.pro/c1d6ee90/product/bea6d0a0"
    },
    {
      name: "Pack M 🔥",
      price: "€32",
      info: "Bevat 200 verfkogels per persoon.",
      link: "https://booking.yoplanning.pro/c1d6ee90/product/2de2c757"
    },
    {
      name: "Pack L ⚡",
      price: "€39",
      info: "Bevat 300 verfkogels per persoon.",
      link: "https://booking.yoplanning.pro/c1d6ee90/product/6cdb7989"
    },
    {
      name: "Pack XXL 🚀🚀🚀",
      price: "€47",
      info: "Bevat 400 verfkogels per persoon.",
      link: "https://booking.yoplanning.pro/c1d6ee90/product/0926cd7c"
    }
  ];

  const container = document.createElement("div");
  container.className = "paintball-boxes";

  packs.forEach((pack) => {
    const card = document.createElement("div");
    card.className = "paintball-pack";

    const left = document.createElement("div");
    left.className = "btn-info";
    left.textContent = "ℹ️ Info";
    left.addEventListener("click", (e) => {
      e.stopPropagation();
      showPopup(pack.name, pack.info);
    });

    const right = document.createElement("a");
    right.className = "paintball-info";
    right.href = pack.link;
    right.target = "_blank";
    right.innerHTML = `
      <h3>${pack.name}</h3>
      <p>${pack.price}</p>
      <div class="btn-book">Boek hier</div>
    `;

    card.appendChild(left);
    card.appendChild(right);
    container.appendChild(card);
  });

  const mount = document.getElementById("paintball-booking");
  mount.appendChild(container);

  const contact = document.createElement("p");
  contact.innerHTML = `Groepen groter dan 26? Contacteer ons via e-mail:<br>
    <a href="mailto:souria@ice-mountain.com">souria@ice-mountain.com</a>`;
  contact.style.textAlign = "center";
  contact.style.marginTop = "2rem";
  contact.style.fontWeight = "bold";
  mount.appendChild(contact);

  const popup = document.createElement("div");
  popup.className = "popup";
  popup.style.display = "none";
  popup.innerHTML = `
    <div class="popup-inner">
      <span class="close-popup">&times;</span>
      <h3 id="popup-title"></h3>
      <p id="popup-content"></p>
    </div>`;
  document.body.appendChild(popup);

  function showPopup(title, content) {
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-content").textContent = content;
    popup.style.display = "block";
  }

  popup.querySelector(".close-popup").addEventListener("click", () => {
    popup.style.display = "none";
  });
});
