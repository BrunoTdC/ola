<?php 

require_once("config.php");

if($_POST['nome'] == ""){
	echo 'Preecha o Campo Nome';
	exit();
}

if($_POST['email'] == ""){
	echo 'Preecha o Campo Email';
	exit();
}

if($_POST['mensagem'] == ""){
	echo 'Preecha o Campo Mensagem';
	exit();
}

$destinatario = $email;
$assunto = $nome_loja . ' - Email do Site';

$mensagem = utf8_decode('Nome: '.$_POST['nome']. "\r\n"."\r\n" . 'Telefone: '.$_POST['telefone']. "\r\n"."\r\n" . 'Mensagem: ' . "\r\n"."\r\n" .$_POST['mensagem']);


$cabecalhos = "From: ".$_POST['email'];

mail($destinatario, $assunto, $mensagem, $cabecalhos);

echo 'Enviado com Sucesso!';


 ?>