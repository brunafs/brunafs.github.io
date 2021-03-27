window.onload = initPage;

var i = 0;
var txt = 'Desenvolvedora, Designer, Freelancer';
var speed = 300;

function initPage(){
   //TYPING EFFECT NA HOME PAGE 
   if (i < txt.length) {
      if (txt.charAt(i) == ',') {
         document.getElementById("demo").innerHTML = '';
         i++;
      }
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      if (i == txt.length){
         i = 0;
         document.getElementById("demo").innerHTML = '';
      }
      setTimeout(initPage, speed);
   }
}