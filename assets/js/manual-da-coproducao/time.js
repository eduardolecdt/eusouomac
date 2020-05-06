var deadline = new Date("apr 2, 2020 23:59:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("dia").innerHTML =days ;
document.getElementById("hora").innerHTML =hours;
document.getElementById("minuto").innerHTML = minutes;
document.getElementById("segundo").innerHTML =seconds;
if (t < 0) {
        clearInterval(x);
        document.getElementById("text").innerHTML = "Desculpe! O Treinamento não está mais aberto.";
        document.getElementById("dia").innerHTML ='0';
        document.getElementById("hora").innerHTML ='0';
        document.getElementById("minuto").innerHTML ='0' ;
        document.getElementById("segundo").innerHTML = '0'; }
}, 1000);
