<?php
// Recebendo dados do formulário
$name = $_POST['name'];
$phone = $_POST['phone'];
$formacao = $_POST['formacao'];
$subject = $_POST['subject'];
$inputfile =  $_POST['inputfile'];
$message = $_POST['message'];
$email = $_POST['email'];

$boundary = "XYZ-" . date("dmYis") . "-ZYX";
$mensagem = "";

//Definindo os campos importantes
$emailsender="naoresponda@ambientare-sa.com.br";

$headers = "Content-type: multipart/mixed; boundary=\"".$boundary."\"\r\n";
$headers .= "From: Contato do site <naoresponda@ambientare-sa.com.br>\r\n";
$headers .= "Reply-To: $email\r\n";

// Dados que serão enviados
$corpo = "Formulário de contato <br>";
$corpo .= "Nome: " . $name . " <br>";
$corpo .= "Telefone: " . $phone . " <br>";
$corpo .= "Formacao: " . $formacao . " <br>";
$corpo .= "Mensagem: " . " <br>" . $message . " <br>";

$corpo.= "=============== file_exists(inputfile[tmp_name]) ......".$inputfile."==============<br/>";
$corpo.= "=============== !empty(inputfile) ==============".!empty($inputfile)."<br/>";

/* Função que codifica o anexo para poder ser enviado na mensagem  */
if(file_exists($inputfile["tmp_name"]) and !empty($inputfile)){

  $corpo.= "=============== ENTROU NO IF ==============";

  $fp = fopen($_FILES["inputfile"]["tmp_name"],"rb"); // Abri o arquivo enviado.
  $anexo = fread($fp,filesize($_FILES["inputfile"]["tmp_name"])); // Le o arquivo aberto na linha anterior
  $anexo = base64_encode($anexo); // Codifica os dados com MIME para o e-mail
  fclose($fp); // Fecha o arquivo aberto anteriormente
  $anexo = chunk_split($anexo); // Divide a variável do arquivo em pequenos pedaços para poder enviar
  $mensagem = "--$boundary\n"; // Nas linhas abaixo possuem os parâmetros de formatação e codificação, juntamente com a inclusão do arquivo anexado no corpo da mensagem
  $mensagem.= "Content-Transfer-Encoding: 8bits\n";
  $mensagem.= "Content-Type: text/html; charset=\"utf-8\"\n\n";
  $mensagem.= "$corpo\n";
  $mensagem.= "--$boundary\n";
  $mensagem.= "Content-Type: ".$inputfile["type"]."\n";
  $mensagem.= "Content-Disposition: attachment; filename=\"".$inputfile["name"]."\"\n";
  $mensagem.= "Content-Transfer-Encoding: base64\n\n";
  $mensagem.= "$anexo\n";
  $mensagem.= "--$boundary--\r\n";
}
else{ // Caso não tenha anexo 
  $corpo.= "=============== ENTROU NO ELSE ==============";

  $mensagem = "--$boundary\n";
  $mensagem.= "Content-Transfer-Encoding: 8bits\n";
  $mensagem.= "Content-Type: text/html; charset=\"utf-8\"\n\n";
  $mensagem.= "$corpo\n";
}


// Email que receberá a mensagem (Não se esqueça de substituir)
//$email_to = "jean.braga@ambientare.com.br";
$email_to = "igorlisboa34@gmail.com";

$subject = "[CONTATO_SITE] ".$subject;

// Enviando email
$status = mail($email_to, mb_encode_mimeheader($subject, "utf-8"), $mensagem, $headers, "-r".$emailsender);

if(!$status){ // Se for Postfix
  $headers .= "Return-Path: " . $emailsender . "\n"; // Se "não for Postfix"
  mail($emaildestinatario, $assunto, $mensagem, $headers );
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
