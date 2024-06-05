window.onload = async function carrega() {
    var resultado = await fetch("../php/retrieve.php", {
        method:"GET"
    });

    var dados = await resultado.json();

    for(var i = 0; i < dados.length; i++){

        var conteudo = 
        `<div class="card">
            <div class="card-img">
                <img src=image/${dados[i].imagem}.png />
            </div>
            <div class="card-nome">${dados[i].nome}</div>

            <div class="card-preco">R$${dados[i].preco}.00</div>
            <div class="card-baixo">
                <div class="card-nacionalidade">País: ${dados[i].nacionalidadae}</div>
                <div class="card-tipo">Tipo: ${dados[i].tipo}</div>
            </div>
            <div class="card-botao">
                <button class="cardbutton" onclick="carrinho(${dados[i].id})">Adicionar ao Carrinho</button>
            </div>
        </div>`;

            document.getElementById('frenteLoja').innerHTML += conteudo;


    }

}

function carrinho(id){
    
    var compras = new FormData();
    compras.append("id_produto", id);

    fetch("../php/carrinho.php", {
        method: "POST",
        body: compras
    });
}




    