<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Sistema de Key - TxChris</title>
<style>
body {
    background: #0f0f0f;
    color: #fff;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
.container {
    max-width: 400px;
    margin: 40px auto;
    background: #151515;
    padding: 20px;
    border-radius: 10px;
}
h2 {
    text-align: center;
}
input, button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
}
input {
    background: #222;
    color: #fff;
}
button {
    background: #ff0055;
    color: #fff;
    font-weight: bold;
}
button:hover {
    opacity: 0.8;
}
.status {
    margin-top: 10px;
    text-align: center;
}
.admin {
    display: none;
}
.key-box {
    background: #222;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 14px;
}
</style>
</head>
<body>

<div class="container" id="loginBox">
    <h2>SISTEMA DE KEY</h2>
    <input id="keyInput" placeholder="Digite a Key">
    <button onclick="pasteKey()">PASTE KEY</button>
    <button onclick="login()">LOGIN</button>
    <button onclick="openAdmin()">ADM</button>
    <div class="status" id="status"></div>
</div>

<div class="container admin" id="adminBox">
    <h2>PAINEL ADM</h2>

    <input id="adminPass" placeholder="Senha ADM">
    <button onclick="loginAdmin()">ENTRAR</button>

    <div id="adminPanel" style="display:none">
        <input id="newKey" placeholder="Nova Key">
        <input id="keyLimit" placeholder="Limite de usos">
        <input id="keyHours" placeholder="Duração (horas)">
        <button onclick="addKey()">CRIAR KEY</button>

        <div id="keyList"></div>

        <button onclick="closeAdmin()">FECHAR</button>
    </div>

    <div class="status" id="adminStatus"></div>
</div>

<script>
// ===== CONFIG =====
const ADM_PASSWORD = "TxChrisADM#9xP!2026";

// ===== STORAGE =====
function getKeys() {
    return JSON.parse(localStorage.getItem("keys") || "[]");
}
function saveKeys(keys) {
    localStorage.setItem("keys", JSON.stringify(keys));
}

// ===== LOGIN =====
function login() {
    let key = document.getElementById("keyInput").value;
    let keys = getKeys();
    let now = Date.now();

    let k = keys.find(k => k.key === key);
    if (!k) {
        status("KEY INVÁLIDA");
        return;
    }

    if (k.used >= k.limit) {
        status("LIMITE ATINGIDO");
        return;
    }

    if (now > k.expire) {
        status("KEY EXPIRADA");
        return;
    }

    k.used++;
    saveKeys(keys);
    status("KEY ACEITA ✔");
}

// ===== STATUS =====
function status(msg) {
    document.getElementById("status").innerText = msg;
}

// ===== PASTE KEY =====
function pasteKey() {
    document.getElementById("keyInput").value = "FREE_Txchris_v6";
}

// ===== ADMIN =====
function openAdmin() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("adminBox").style.display = "block";
}

function closeAdmin() {
    document.getElementById("adminBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}

function loginAdmin() {
    let pass = document.getElementById("adminPass").value;
    if (pass !== ADM_PASSWORD) {
        document.getElementById("adminStatus").innerText = "Senha errada";
        return;
    }
    document.getElementById("adminPanel").style.display = "block";
    document.getElementById("adminStatus").innerText = "";
    renderKeys();
}

// ===== ADD KEY =====
function addKey() {
    let key = document.getElementById("newKey").value;
    let limit = parseInt(document.getElementById("keyLimit").value);
    let hours = parseInt(document.getElementById("keyHours").value);

    if (!key || !limit || !hours) return;

    let keys = getKeys();
    keys.push({
        key: key,
        limit: limit,
        used: 0,
        expire: Date.now() + hours * 3600000
    });
    saveKeys(keys);
    renderKeys();
}

// ===== LIST =====
function renderKeys() {
    let box = document.getElementById("keyList");
    box.innerHTML = "";
    let keys = getKeys();

    keys.forEach((k, i) => {
        box.innerHTML += `
        <div class="key-box">
            <b>${k.key}</b><br>
            Usos: ${k.used}/${k.limit}<br>
            Expira: ${new Date(k.expire).toLocaleString()}<br>
            <button onclick="removeKey(${i})">REMOVER</button>
        </div>`;
    });
}

function removeKey(i) {
    let keys = getKeys();
    keys.splice(i, 1);
    saveKeys(keys);
    renderKeys();
}
</script>

</body>
</html>                                                                                                                                                <div id="keyBox" class="key-box">---</div>

                                                                                                                                                    <button onclick="copiarKey()">COPIAR KEY</button>

                                                                                                                                                        <p><small>Validade até 06/01/2026</small></p>
                                                                                                                                                        </div>

                                                                                                                                                        <script>
                                                                                                                                                        function gerarKey() {
                                                                                                                                                            // KEY FIXA (recomendada pra AIDE)
                                                                                                                                                                const key = "TX CHRIS V3";
                                                                                                                                                                    document.getElementById("keyBox").innerText = key;
                                                                                                                                                                    }

                                                                                                                                                                    function copiarKey() {
                                                                                                                                                                        const key = document.getElementById("keyBox").innerText;
                                                                                                                                                                            if (key === "---") {
                                                                                                                                                                                    alert("Gere a key primeiro!");
                                                                                                                                                                                            return;
                                                                                                                                                                                                }

                                                                                                                                                                                                    navigator.clipboard.writeText(key).then(() => {
                                                                                                                                                                                                            alert("Key copiada!");
                                                                                                                                                                                                                });
                                                                                                                                                                                                                }
                                                                                                                                                                                                                </script>

                                                                                                                                                                                                                </body>
                                                                                                                                                                                                                </html>
