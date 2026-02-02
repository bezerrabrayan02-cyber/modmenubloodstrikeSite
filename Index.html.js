<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Doação</title>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0f0f0f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.tela {
  display: none;
  width: 100%;
  text-align: center;
}

.ativa {
  display: block;
}

.box {
  background: #1c1c1c;
  padding: 25px;
  border-radius: 10px;
  width: 90%;
  max-width: 350px;
  margin: auto;
}

.pix {
  background: #000;
  padding: 12px;
  margin: 15px 0;
  border-radius: 6px;
  word-break: break-all;
  font-size: 14px;
}

button {
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.nao {
  background: #444;
  color: #fff;
}

.acessar {
  background: #00ff88;
  color: #000;
  font-weight: bold;
}
</style>
</head>

<body>

<!-- TELA DOAÇÃO -->
<div id="doacao" class="tela ativa">
  <div class="box">
    <h2>Doação</h2>

    <p>Você poderia me ajudar com qualquer quantia?</p>

    <div class="pix">
      <b>Pix:</b><br>
      89ee179c-de2b-4d28-8bed-82d7da0f6fb5
    </div>

    <button class="nao" onclick="irMenu()">Não obrigado</button>
  </div>
</div>

<!-- TELA MOD MENU -->
<div id="menu" class="tela">
  <div class="box">
    <h2>MOD MENU</h2>
    <h3>BLOOD STRIKE</h3>

    <br>

    <button class="acessar" onclick="abrirLink()">ACESSAR</button>
  </div>
</div>

<script>
function irMenu() {
  document.getElementById("doacao").classList.remove("ativa");
  document.getElementById("menu").classList.add("ativa");
}

function abrirLink() {
  window.location.href = "https://prospexurl.com.br/r/15aff5f6";
}
</script>

</body>
</html>
