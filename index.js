var text = document.querySelector('.text')
var alisher = Number(prompt("Alisher qancha puling bor"))

var sumdollar = 9433.34;
var sumyevro = 10354.03;
var bilet = 500;
var hotel = 250;
var muzey = 120;

var biletxisob = sumdollar * bilet;
var hotelxisob = sumdollar * hotel;
var muzayhisob = sumyevro * muzey;

var umumiy = biletxisob + hotelxisob + muzayhisob;

if(alisher >= umumiy){
    text.textContent = "Oq yo'l Alisher🐱‍🏍"
    text.style.color = 'lime'
}else {
    text.textContent = "Alisher o'zgina sabr qilish kerak bolar ekan😊"
    text.style.color = 'red'
}
console.log(text)