<!DOCTYPE html>
<html lang="pt-br">
<head>
   <meta charset="UTF-8">
   <title>Portfolio</title>
   
   <link rel="shortcut icon" href="includes/icon/flaticon-programming.icon"/>
   <link href="includes/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
   <link href="includes/icon/flaticon.css" rel="stylesheet">
   <link href="css/style.css" rel="stylesheet">
   <script src="js/main.js"></script>
   <meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body> 
   <?php
      session_start();
      include 'view/home.html';

      if(!isset($_GET['idioma'])){
         $_SESSION['idioma'] = 'view/pt-br/index.php';
         include $_SESSION['idioma'];
      } else if(isset($_GET['idioma']))
      {
         include 'view/'.$_GET['idioma'];
      };
   ?> 

</body>
</html>