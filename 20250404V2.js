document.addEventListener("DOMContentLoaded", () => {
  const packs = [
    {
      name: "Pack S 🎈",
      price: "€25",
      info: "Bevat 100 verfkogels per persoon.",
      link: "https://booking.yoplanning.pro/c1d6ee90-b7bc-43c2-a097-238496112682/product/bea6d0a0-722c-4196-b404-f38e8b2cfa63"
    },
    {
      name: "Pack M 🔥",
      price: "€32",
      info: "Bevat 200 verfkogels per persoon.",
      link: "https://booking.yoplanning.pro/c1d6ee90-b7bc-43c2-a097-238496112682/product/2de2c757-79ff-489c-954c-fb4f1380a5da"
    },
    {
      name: "Pack L ⚡",
      price: "€39",
      info: "Bevat 300 verfkogels per persoon.",
      link: "https://booking.yoplanning.pro/c1d6ee90-b7bc-43c2-a097-238496112682/product/6cdb7989-1585-43aa-95f8-b09cc75a8824"
    },
    {
      name: "Pack XXL 🚀🚀🚀",
      price: "€47",
      info: "Bevat 400 verfkogels per persoon.",
      link: "https://booking.yoplanning.pro/c1d6ee90-b7bc-43c2-a097-238496112682/product/0926cd7c-515b-4e23-9218-c6732c373d86"
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

    const right = document.createElement("div");
    right.className = "paintball-info";
    right.innerHTML = `
      <h3>${pack.name}</h3>
      <p class="pack-price">${pack.price}</p>
      <div class="btn-book"><a href="${pack.link}" target="_blank" style="color: white; text-decoration: none;">Boek hier</a></div>
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
    <div class="popup-inner" style="background:white; padding: 2rem; border-radius: 10px; max-width: 500px; margin: auto; box-shadow: 0 10px 40px rgba(0,0,0,0.3); position: relative;">
      <span class="close-popup" style="position:absolute; top:10px; right:15px; font-size: 22px; cursor: pointer;">&times;</span>
      <h3 id="popup-title" style="margin-top:0;"></h3>
      <p id="popup-content"></p>
    </div>
  `;
  Object.assign(popup.style, {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgba(0,0,0,0.5)",
    zIndex: "9999",
    display: "none",
    alignItems: "center",
    justifyContent: "center"
  });

  document.body.appendChild(popup);

  function showPopup(title, content) {
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-content").textContent = content;
    popup.style.display = "flex";
  }

  popup.querySelector(".close-popup").addEventListener("click", () => {
    popup.style.display = "none";
  });
});
