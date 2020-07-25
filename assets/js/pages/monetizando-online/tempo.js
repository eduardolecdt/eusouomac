var countDownDate = new Date("Jul 29, 2020 23:59:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("dias").innerHTML = days;
      document.getElementById("horas").innerHTML = hours;
      document.getElementById("minutos").innerHTML = minutes;
      document.getElementById("segundos").innerHTML = seconds;

   if (distance < 0) {
      clearInterval(x);
      document.getElementById("text").innerHTML = 'Desculpe! O treinamento está fechado.';
      document.getElementById("dias").innerHTML = "0";
      document.querySelector('a.link').classList.add('desativado');
      document.getElementById("horas").innerHTML = "0";
      document.getElementById("minutos").innerHTML = "0";
      document.getElementById("segundos").innerHTML = "0";
   }

}, 1000);
