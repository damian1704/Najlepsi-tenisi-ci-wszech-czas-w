
  function odliczanie() 
  {

    let dzisiaj = new Date();

    let dzien = dzisiaj.getDate();
    let miesiac = dzisiaj.getMonth()+1;
    let rok = dzisiaj.getFullYear();

    let godzina = dzisiaj.getHours();
    if(godzina<10) godzina = "0"+godzina;

    let minuta = dzisiaj.getMinutes();
    if(minuta<10) minuta = "0"+minuta;

    let sekunda = dzisiaj.getSeconds();
    if(sekunda<10) sekunda = "0"+sekunda;

    document.getElementById("watch").innerHTML = dzien+"/"+miesiac+"/"+rok+"<br/>"+godzina+":"+minuta+":"+sekunda;

    setTimeout("odliczanie()",1000);
  }

  function Rafa()
  {
  document.getElementById("Nadal").style.fontSize="40px";
  document.getElementById("Nadal").style.textAlign="center";
  document.getElementById("Nadal").innerHTML = "Rafeal Nadal 14 wins Rolland Garros!";
  }
  
  /*function player () 
  {
    const player = [Nadal, Djokovic, Federer];
    document.getElementById("Rafael Nadal").innerHTML=player;
  }*/
  
 

  /*function displayDate() {
    document.getElementById("watch").innerHTML = Date();
  }*/

  /*document.getElementById("movie-rafaelnadal").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("movie-rafaelnadal").style.display = block;
}

/*function removeHandler() {
  document.getElementById("movie-rafaelnadal").removeEventListener("mousemove", myFunction);
}*/

/*document.getElementById("movie-rafaelnadal").style.display = "block";*/