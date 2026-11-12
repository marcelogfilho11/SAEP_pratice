if (!localStorage.getItem('produto')) {
    const BancoInicial = [
        { produto: "Teclado Mecânico", quantidade: 15, preco: "R$ 250,00" },
        { produto: "Mouse Sem Fio", quantidade: 30, preco: "R$ 120,00" }
    ];
    let dadosTabela = JSON.parse(localStorage.getItem("meusDadosPlanilha"))
}
function adicionarLinha() {
    const produto = document.getElementById("produto").value;
    const estoque_atual = document.getElementById("estoque_atual").value;
    const preco = document.getElementById("preco").value;

    if (produto === "" || estoque_atual === "" || preco === "") {
    alert("Por favor, preencha todos os campos.");
    return;
    }

    const tabela = document.getElementById("table").getElementsByTagName("tbody")[0];

    const novaLinha = tabela.insertRow();

    const celula1 = novaLinha.insertCell(0);
    const celula2 = novaLinha.insertCell(1);
    const celula3 = novaLinha.insertCell(2);

    celula1.textContent = produto;
    celula2.textContent = estoque_atual;
    celula3.textContent = preco;

    document.getElementById("produto").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("preco").value = "";
}

function Delete() {
    const produto = document.getElementById("produto").value;
}