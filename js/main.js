var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elText = document.querySelector(".js-text");
var elText2 = document.querySelector(".js-text2");
var elText3 = document.querySelector(".js-text3");
var elText4 = document.querySelector(".js-text4");

var piyoda = 3.6;
var velosiped = 20.1;
var mashina = 70;
var samolyot = 800;


elForm.addEventListener("submit", function(e) {
  e.preventDefault();
 
  var a = elInput.value;
 // Sayoxatga piyoda borsak qancha vaqit ketishini kuramiz!!!
  var piyodaSoat = Math.floor(a / piyoda);
  var soat = (a / piyoda);
  var piyodaMinut = Math.floor((soat - piyodaSoat) * 60) ;
  var c = (soat - piyodaSoat) * 60 ;
  var piyodaSekunt = Math.round((c - piyodaMinut) * 60) ;
  elText.textContent = `🏃‍♂️🏃‍♂️🏃‍♂️ Siz piyoda ${piyodaSoat} soatda va ${piyodaMinut} minutda va ${piyodaSekunt} sekuntda yitib borasiz`;

  // Sayoxatga velosipedda borsak qancha vaqit ketishini kuramiz!!!
  var velosipedSoat = Math.floor(a / velosiped);
  var soat2 = (a / velosiped);
  var velosipedMinut = Math.floor((soat2 - velosipedSoat) * 60) ;
  var b = (soat2 - velosipedSoat) * 60 ;
  var velosiedSekunt = Math.round((b - velosipedMinut) * 60) ;
  elText2.textContent = `🚴‍♀️🚴‍♀️🚴‍♀️ Siz velosipedda ${velosipedSoat} soatda va ${velosipedMinut} minutda va ${velosiedSekunt} sekuntda yitib borasiz`;
  console.log(velosipedSoat);
  console.log(velosipedMinut);
  console.log(velosiedSekunt);
  // Sayoxatga mashinada borsak qancha vaqit ketishini kuramiz
  var mashinaSoat = Math.floor(a / mashina);
  var soat3 = (a / mashina);
  var mashinaMinut = Math.floor((soat3 - mashinaSoat) * 60) ;
  var a = (soat3 - mashinaSoat) * 60 ;
  var mashenaSekunt = Math.round((a - mashinaMinut) * 60) ;
  elText3.textContent = `🚗🚗🚗 Siz mashenada ${mashinaSoat} soatda va ${mashinaMinut} minutda va ${mashenaSekunt} sekuntda yitib borasiz`;

  // Sayoxatga samolyotda borsak qancha vaqit ketishini kuramiz
  var samolyotSOAT = Math.floor(a / samolyot);
  var soat4 = (a / samolyot);
  var samolyotMinut = Math.floor((soat4 - samolyotSOAT) * 60) ;
  var d = (soat4 - samolyotSOAT) * 60 ;
  var samolotSekunt = Math.round((d - samolyotMinut) * 60) ;
  elText4.textContent = `✈✈✈ Siz samolyotda ${samolyotSOAT} soatda va ${samolyotMinut} minutda va ${samolotSekunt} sekuntda yitib borasiz`;

})


















