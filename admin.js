
const senhaCorreta = "Mv760499";

function checkPassword() {
  const senha = document.getElementById("password").value;
  if (senha === senhaCorreta) {
    document.getElementById("login").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    carregarPromocoes();
  } else {
    alert("Senha incorreta!");
  }
}

function carregarPromocoes() {
  const lista = document.getElementById("listaPromocoes");
  lista.innerHTML = "";
  const promocoes = JSON.parse(localStorage.getItem("promocoes") || "[]");
  promocoes.forEach((promo, index) => {
    const item = document.createElement("li");
    item.innerHTML = \`\${promo.titulo} - <a href="\${promo.link}" target="_blank">Ver</a> 
      <button onclick="removerPromocao(\${index})">Remover</button>\`;
    lista.appendChild(item);
  });
}

function adicionarPromocao() {
  const titulo = document.getElementById("titulo").value;
  const link = document.getElementById("link").value;
  if (!titulo || !link) return alert("Preencha todos os campos!");

  const promocoes = JSON.parse(localStorage.getItem("promocoes") || "[]");
  promocoes.push({ titulo, link });
  localStorage.setItem("promocoes", JSON.stringify(promocoes));
  carregarPromocoes();
  document.getElementById("titulo").value = "";
  document.getElementById("link").value = "";
}

function removerPromocao(index) {
  const promocoes = JSON.parse(localStorage.getItem("promocoes") || "[]");
  promocoes.splice(index, 1);
  localStorage.setItem("promocoes", JSON.stringify(promocoes));
  carregarPromocoes();
}
