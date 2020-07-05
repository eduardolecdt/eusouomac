var countDownDate = new Date("Jul 10, 2020 23:59:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("dia").innerHTML = days;
      document.getElementById("hora").innerHTML = hours;
      document.getElementById("minuto").innerHTML = minutes;
      document.getElementById("segundo").innerHTML = seconds;

   if (distance < 0) {
      clearInterval(x);
      document.getElementById("text").innerHTML = "Desculpe! O treinamento está fechado.";
      document.getElementById("dia").innerHTML ='0';
      document.getElementById("hora").innerHTML ='0';
      document.getElementById("minuto").innerHTML ='0' ;
      document.getElementById("segundo").innerHTML = '0';
   }

}, 1000);
