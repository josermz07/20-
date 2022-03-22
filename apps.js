alert("welcome to 20! This is a competition to see which player gets closer to the number 20. You are goin gto be platin againts the computer. you will draw numbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number, press 'y'.");
 
alert("Now its the computers turn");
 
var computerNumber = 0;
 
do {
 
   var r = Math.floor(Math.random() * 10) + 1
 
   computerNumber = computerNumber + r
 
   alert("The computer picked"  +  " " + r + " " + "The computer has" + " " + computerNumber)
 
} while (computerNumber < 16)
 
alert("Now its your turn")
 
 
var userNumber = 0;
 
do {
 
   var uc = Math.floor(Math.random() * 10) + 1
 
   userNumber = userNumber + uc
 
   alert("Your new number is" + " " + uc + " " + "your total is " + userNumber);
 
   var uca = prompt("Would you like another number? if so press 'y' if you would like to stop press 'n' to stop");
 
} while ((userNumber < 20) && (uca != "n"))
 
   if (uca == 'y'){
   alert("You picked"  +  " " + uc + " " + "your total " + " " + userNumber)
   }
   else if (uca == 'n') {
   alert("Your total was" + " " + userNumber) }
   if (computerNumber > userNumber ) {
       alert("Computer wins. The computers total was" + " " + computerNumber + " " + "your total was" + " " + userNumber);
   }
   else if (userNumber > computerNumber) {
       alert("You win. The computers total was" + " " + computerNumber + " " + "your total was" + " " + userNumber);
   }
