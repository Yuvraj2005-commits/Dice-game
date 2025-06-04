var randomNumer=Math.random()*6;
 randomnumber=Math.floor(randomNumer)+1;
 var randomDiceImage="dice"+randomnumber+".png";
 var randomImageSource="images/"+randomDiceImage;
 var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src",randomImageSource);

 var randomnumber2=Math.random()*6;
 randomnumber2=Math.floor(randomnumber2)+1;
 var randomDiceImage2="dice"+randomnumber2+".png";
 var randomImageSource2="images/"+randomDiceImage2;
 var image2=document.querySelectorAll("img")[1];
 image2.setAttribute("src",randomImageSource2);

 if(randomnumber>randomnumber2){
   document.querySelector("h1").innerHTML="Player 1 wins";
 }
 else if(randomnumber<randomnumber2){
   document.querySelector("h1").innerHTML="Player 2 wins";
 }
 else{
   document.querySelector("h1").innerHTML="Draw";
 }
