<?php
    
    $resultado = mysql_query($conexao, "
    SELECT * FROM carrinho 
    JOIN produto ON produto.id = carrinho.id_produto
    ");

    $produtos_finais = array();

    while ($ler = mysqli_fetch_assoc($resultado)){
        array_push($produtos_finais, $ler);
    };

    $json = json_encode($produtos_finais);

    echo $json;



?>