<?php
// Recebendo dados do formulário
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

//Definindo os campos importantes
$emailsender="naoresponda@ambientare-sa.com.br";

$headers = "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: Contato do site <naoresponda@ambientare-sa.com.br>\r\n";
$headers .= "Reply-To: $email\r\n";

// Dados que serão enviados
$corpo = "Formulário de contato <br>";
$corpo .= "Nome: " . $name . " <br>";
$corpo .= "Telefone: " . $phone . " <br>";
$corpo .= "Email: " . $email . " <br>";
$corpo .= "Mensagem: " . " <br>" . $message . " <br>";

// Email que receberá a mensagem (Não se esqueça de substituir)
$email_to = "ambientare@ambientare.com.br";

$subject = "[CONTATO_SITE] ".$subject;

// Enviando email
$status = mail($email_to, mb_encode_mimeheader($subject, "utf-8"), $corpo, $headers, "-r".$emailsender);

if(!$status){ // Se for Postfix
  $headers .= "Return-Path: " . $emailsender . "\n"; // Se "não for Postfix"
  mail($emaildestinatario, $assunto, $mensagemHTML, $headers );
}

if ($status):
  // Enviada com sucesso
//  header('location:index.php?status=sucesso');
    echo "OK";
else:
  // Se der erro
  //header('location:index.php?status=erro');
    echo "ERROR";
endif;
?>