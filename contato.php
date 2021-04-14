<?php

if (!empty($_POST['email']) && !empty($_POST['msg']) && !empty($_POST['assunto']) && !empty($_POST['nome']) ){

   include("./includes/phpmailer/class.phpmailer.php"); 
   include("./includes/phpmailer/class.smtp.php"); 

   //INFO DO FORMULARIO
   $nome = $_POST['nome'];
   $emailFrom = $_POST['email'];
   $assunto = $_POST['assunto'];
   $mensagem = $_POST['msg'];

   $mail = new PHPMailer();

   // Configuração gmail SMTP
   $mail->isSMTP();
   $mail->Host="smtp.gmail.com";
   $mail->Port=587;
   $mail->SMTPAuth = true;
   $mail->Username='brunasantana98@gmail.com';
   $mail->Password='bruna@10';
   
   $mail->SMTPOptions = array( 'ssl' => array( 'verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true ) ); 
   // $mail->SMTPDebug = SMTP::DEBUG_SERVER;

   // CONFIGURAR MENSAGEM
   $mail-> Charset = 'UTF-8';
   $mail->setFrom($emailFrom, $nome);
   $mail->addAddress('brunasantana98@gmail.com', 'Bruna');
   $mail->Subject = $assunto;

   $mail-> msgHTML("
      <p><b>Mensagem enviada via Portfolio:</b>\n\n</p>
      <p>E-mail enviado de: {$emailFrom}</p>
      <p>{$mensagem}</p>
   ");

   #Variavel de resposta AJAX
   $response = array();

   // ENVIO
   if($mail->send()){
      $response['status'] = 'sucess';
      $response['mensagem'] = 'E-mail enviado !';
   } else {
      $response['status'] = 'error';
      $msgErro = $mail -> ErrorInfo;
      $response['mensagem'] = 'Erro ao enviar e-mail. Erro: '. $msgErro;
   }

   echo json_encode($response);
}
?>