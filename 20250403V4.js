document.addEventListener("DOMContentLoaded", () => {
  const packs = [
    {
      name: "Pack S 🎈",
      price: "Vanaf €25",
      bookingUrl: "https://booking.yoplanning.pro/c1d6ee90-b7bc-43c2-a097-238496112682/product/bea6d0a0-722c-4196-b404-f38e8b2cfa63"
    },
    {
      name: "Pack M 🔥",
      price: "Vanaf €32",
      bookingUrl: "https://booking.yoplanning.pro/c1d6ee90-b7bc-43c2-a097-238496112682/product/2de2c757-79ff-489c-954c-fb4f1380a5da"
    },
    {
      name: "Pack L ⚡",
      price: "Vanaf €39",
      bookingUrl: "https://booking.yoplanning.pro/c1d6ee90-b7bc-43c2-a097-238496112682/product/6cdb7989-1585-43aa-95f8-b09cc75a8824"
    },
    {
      name: "Pack XXL 🚀🚀🚀",
      price: "Vanaf €47",
      bookingUrl: "https://booking.yoplanning.pro/c1d6ee90-b7bc-43c2-a097-238496112682/product/0926cd7c-515b-4e23-9218-c6732c373d86"
    }
  ];

  const container = document.createElement("div");
  container.className = "paintball-boxes";

  packs.forEach((pack) => {
    const card = document.createElement("div");
    card.className = "paintball-pack";

    card.innerHTML = `
      <h3>${pack.name}</h3>
      <p>2u actie · ${pack.price}</p>
    `;

    const input = document.createElement("input");
    input.className = "YoplanningBookingEngine";
    input.setAttribute("booking-engine-url", pack.bookingUrl);
    input.setAttribute("type", "submit");
    input.setAttribute("value", "Réserver");
    input.setAttribute("style", `
      border: 0;
      border-radius: 3px;
      box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
      cursor: pointer;
      display: inline-block;
      font-family: sans-serif;
      text-align: center;
      background-color: #470ff4;
      color: #fff;
      font-size: 14px;
      height: 44px;
      line-height: 44px;
      padding: 0px 40px;
    `);

    card.appendChild(input);
    container.appendChild(card);
  });

  const mount = document.getElementById("paintball-booking");
  mount.appendChild(container);

  // Add contact info
  const contact = document.createElement("p");
  contact.innerHTML = `Groepen groter dan 26? Contacteer ons via e-mail:<br>
    <a href="mailto:souria@ice-mountain.com">souria@ice-mountain.com</a>`;
  contact.style.textAlign = "center";
  contact.style.marginTop = "2rem";
  contact.style.fontWeight = "bold";
  mount.appendChild(contact);

  // Re-initialize YoPlanning script (very important)
  const script = document.createElement("script");
  script.src = "https://booking.yoplanning.pro/integration/script.js";
  script.async = true;
  document.body.appendChild(script);
});
