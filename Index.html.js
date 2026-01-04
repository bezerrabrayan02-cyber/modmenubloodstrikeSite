<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>TX CHRIS - KEY SYSTEM</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body {
    margin: 0;
        font-family: Arial, sans-serif;
            background: #0f0f0f;
                color: white;
                    text-align: center;
                    }

                    header {
                        background: linear-gradient(90deg, #ff0066, #7928ca);
                            padding: 20px;
                                font-size: 22px;
                                    font-weight: bold;
                                    }

                                    .container {
                                        margin: 40px auto;
                                            max-width: 350px;
                                                background: #1c1c1c;
                                                    padding: 20px;
                                                        border-radius: 12px;
                                                            box-shadow: 0 0 20px rgba(0,0,0,0.5);
                                                            }

                                                            button {
                                                                width: 100%;
                                                                    padding: 12px;
                                                                        margin-top: 10px;
                                                                            font-size: 16px;
                                                                                border: none;
                                                                                    border-radius: 8px;
                                                                                        background: #ff0066;
                                                                                            color: white;
                                                                                                cursor: pointer;
                                                                                                }

                                                                                                button:hover {
                                                                                                    background: #ff3385;
                                                                                                    }

                                                                                                    .key-box {
                                                                                                        background: black;
                                                                                                            padding: 12px;
                                                                                                                margin-top: 15px;
                                                                                                                    border-radius: 8px;
                                                                                                                        font-size: 18px;
                                                                                                                            word-break: break-all;
                                                                                                                            }

                                                                                                                            small {
                                                                                                                                opacity: 0.7;
                                                                                                                                }
                                                                                                                                </style>
                                                                                                                                </head>

                                                                                                                                <body>

                                                                                                                                <header>🔐 TX CHRIS KEY SYSTEM</header>

                                                                                                                                <div class="container">
                                                                                                                                    <h2>Gerar sua Key</h2>
                                                                                                                                        <p>Clique no botão abaixo para gerar sua Key</p>

                                                                                                                                            <button onclick="gerarKey()">GERAR KEY</button>

                                                                                                                                                <div id="keyBox" class="key-box">---</div>

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