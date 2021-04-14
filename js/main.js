$(document).ready(function(){

   // Skills section
   $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
   });
   
   // BOTAO VOLTAR PARA O TOPO
   $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
         $('.back-to-top').fadeIn('slow');
      } else {
         $('.back-to-top').fadeOut('slow');
      }
   });
   $('.back-to-top').click(function() {
      $('html, body').animate({
         scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
   });
   // BOTAO VOLTAR PARA O TOPO

   // TYPING EFFECT NA HOME PAGE 
   var i = 0;
   var txt = 'Desenvolvedora, Designer, Freelancer';
   var speed = 300;

   function initPage(){
      if (i < txt.length) {
         if (txt.charAt(i) == ',') {
            document.getElementById("typing").innerHTML = '';
            i++;
         }
         document.getElementById("typing").innerHTML += txt.charAt(i);
         i++;
         if (i == txt.length){
            i = 0;
            document.getElementById("typing").innerHTML = '';
         }
         setTimeout(initPage, speed);
      }
   }
   initPage();
   // TYPING EFFECT NA HOME PAGE 


   // SUBMIT FORMULARIO
   $('#formContato').submit(function(e){
      e.preventDefault();

      validar();

      var nome = $('#name').val();
      var email = $('#email').val();
      var assunto = $('#subject').val();
      var msg = $('#message').val();

      $.ajax({
            url: 'contato.php',
            data: {
               email:email,
               nome:nome,
               assunto:assunto,
               msg:msg
            },
            dataType: "json",
            type: "POST",
            success: function(data){
               if(data.status == 'sucess'){
                  $('.mensagem').html(data.mensagem).addClass('field-sucess').fadeIn(300);
                  $('.form-control').val('');
               } else {
                  $('.mensagem').html(data.mensagem).addClass('field-error').fadeIn(300);
               }
            },
            error: function(data){
               if(data.status == 'sucess'){
                  $('.mensagem').html(data.mensagem).addClass('field-sucess').fadeIn(300);
                  $('.form-control').val('');
               } else {
                  $('.mensagem').html(data.mensagem).addClass('field-error').fadeIn(300);
               }
            }
      });
   });
});

// VALIDA CAMPOS FORMULARIO
function validar(){
   var status = 0;
   // $("span.field-error").remove();
   $("span.field-error").html('');

   $('.form-control').each(function(){
      if( $(this).val() == '' ){
         status = 1;
         var mss = $(this).attr('data-msg');
         $(this).after('<span class="field-error">'+mss+'</span>').fadeIn(300);
      }
   });
   if (status == 1){
      return false;
   }else {
      $('#load').html('Enviando...');
      return true;
   }
}
// VALIDA CAMPOS FORMULARIO
// SUBMIT FORMULARIO