<?php

    session_start();

    $compras = $_POST['compras'];
    $id = $_SESSION['id'];

    $query = "SELECT compras FROM usuario WHERE id = '$id'";
$result = mysqli_query($conexao, $query);

    if ($result) {
        $row = mysqli_fetch_assoc($result);
        $compras_atual = $row['compras'];

        // Calculate the new total compras (sum of current compras and new purchase)
        $novo_total_compras = $compras_atual + $compra;

        // Update 'compras' in the usuario table with the new total
        $update_query = "UPDATE usuario SET compras = '$novo_total_compras' WHERE id = '$id'";
        mysqli_query($conexao, $update_query);

?>