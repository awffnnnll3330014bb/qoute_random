var prevNum = -1;

function randomQoute() {
    var Qoutes = [" Be yourself; everyone else is already taken. ", " So many books, so little time. ", " A room without books is like a body without a soul. " , " You only live once, but if you do it right, once is enough.", " Be the change that you wish to see in the world. " , " In three words I can sum up everything I've learned about life: it goes on. " , " If you tell the truth, you don't have to remember anything. " , " A friend is someone who knows all about you and still loves you. " , " Always forgive your enemies; nothing annoys them so much. " , " I am so clever that sometimes I don't understand a single word of what I am saying.  "];
 
    var userNames = ["  Oscar Wilde ", "  Frank Zappa ", "  Marcus Tullius Cicero " , "  Mae West " ,"  Mahatma Gandhi " ,"  Robert Frost " , "  Mark Twain " , "  Elbert Hubbard " , "  Oscar Wilde " , " kabongo  "]; 

    var num = prevNum;

    while (num == prevNum) {
        num = Math.floor(Math.random() * userNames.length);
    }
    prevNum = num;
    document.getElementById("demo").innerHTML =  Qoutes[num] + userNames[num];
}