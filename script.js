
const promocoes = JSON.parse(localStorage.getItem("promocoes") || "[]");
const container = document.getElementById("promoContainer");

if (promocoes.length === 0) {
  container.innerHTML = "<p style='text-align:center;'>Nenhuma promoção cadastrada ainda.</p>";
} else {
  promocoes.forEach(promo => {
    const card = document.createElement("div");
    card.className = "promo-card";
    card.innerHTML = `
      <h2>${promo.titulo}</h2>
      <a href="${promo.link}" target="_blank">Ver oferta</a>
    `;
    container.appendChild(card);
  });
}
