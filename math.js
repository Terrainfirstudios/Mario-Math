/*****************************************************************************
************Welcome to Random Coding challange #2 ****************************
********************Random Math Equation**************************************
******************************************************************************
******************************************************************************
**********************************************Coding by Terrainfir Studios****
*****************************************************************************/

//Global Varibles listed by size
var random1 = Math.floor(Math.random()* Math.floor(11));
var random2 = Math.floor(Math.random()* Math.floor(11));
var rg1 = Math.floor(Math.random()* Math.floor(21))
var rg2 = Math.floor(Math.random()* Math.floor(21))
var rg3 = Math.floor(Math.random()* Math.floor(21))
var A= Math.floor(Math.random()* Math.floor(4)); 
var B= Math.floor(Math.random()* Math.floor(2));
var sMusic = new Audio("superMarioMusic.mp3");
var right = new Audio("rightAnswer.mp3");
var wrong = new Audio("wrongAnswer.mp3");
var symbol;
var answer;
var g1=0;
var g2=0;
var g3=0;
var g4=0;

//When page opens run localCheck function
onload.localCheck();

//if no key called score is stored in localstorage create it and give it a value of zero
function localCheck(){
if ('score' in localStorage){
}else{
    localStorage.setItem("score",0);
}
}

//Function to generate a random symbol
function randomSymbol(){
    if (B == 0){
        symbol="+";
        answer = random1 + random2; 
    }else{
        symbol="-";
        if(random1<random2){
        answer = random2 - random1;
        }else{
            answer = random1 - random2;
        }
    }
}



//Placing each possible random answer inside a random button
function randomPlace(){
    if(A == 0 ){
    g1=document.getElementById("buttonGuess1").innerHTML= answer;
    g2=document.getElementById("buttonGuess2").innerHTML= rg1;
    g3=document.getElementById("buttonGuess3").innerHTML= rg2;
    g4=document.getElementById("buttonGuess4").innerHTML= rg3;    
    
    }else if(A==1){
    g2=document.getElementById("buttonGuess1").innerHTML= rg1;
    g1=document.getElementById("buttonGuess2").innerHTML= answer;
    g3=document.getElementById("buttonGuess3").innerHTML= rg2;
    g4=document.getElementById("buttonGuess4").innerHTML= rg3;

    
    }else if(A==2){
    g3=document.getElementById("buttonGuess1").innerHTML= rg1;
    g2=document.getElementById("buttonGuess2").innerHTML= rg2;
    g1=document.getElementById("buttonGuess3").innerHTML= answer;
    g4=document.getElementById("buttonGuess4").innerHTML= rg3;

    
    }else if(A==3){
    g4=document.getElementById("buttonGuess1").innerHTML= rg1;
    g2=document.getElementById("buttonGuess2").innerHTML= rg2;
    g3=document.getElementById("buttonGuess3").innerHTML= rg3;
    g1=document.getElementById("buttonGuess4").innerHTML= answer;

    }
    
}
//stop negative expressions by forcing greater number to left side
function noNegative(){
    if (random1 < random2){
        document.getElementById("mathText").innerHTML= ( random2 + "  " + symbol + "  " + random1 + " =");
        }else{
        document.getElementById("mathText").innerHTML= ( random1 + "  " + symbol + "  " + random2 + " =");
        }
}

//Fixing random numbers to recive no douplicate numbers
function noDoubles(){
    while (answer == rg1|| answer == rg2||answer == rg3||rg1 == rg2 || rg1 == rg3 ||rg2 == rg1 || rg2 == rg3||rg3 == rg1||rg3 == rg2){
    rg1 = Math.floor(Math.random()* Math.floor(21))
    rg2 = Math.floor(Math.random()* Math.floor(21))
    rg3 = Math.floor(Math.random()* Math.floor(21))
    }
}
function unHide(){
    document.getElementById("mario").style.display="block";
    document.getElementById("flag").style.display = "block";
    var ls = localStorage.getItem("score")
    if(ls >= 1){
    document.getElementById("unlock1").style.display="block";
    }if(ls >= 2){
        document.getElementById("unlock2").style.display="block";
    }if(ls >= 3){
        document.getElementById("unlock3").style.display="block";
    }if(ls >= 4){
        document.getElementById("unlock4").style.display="block";
    }if(ls >= 5){
        document.getElementById("unlock5").style.display="block";
    }if(ls >= 6){
        document.getElementById("unlock6").style.display="block";
    }if(ls >= 7){
        document.getElementById("unlock7").style.display="block";
    }if(ls >= 8){
        document.getElementById("unlock8").style.display="block";
    }if(ls >= 9){
        document.getElementById("unlock9").style.display="block";
    }if(ls >= 10){
        document.getElementById("unlock10").style.display="block";
    }
}


//parses the image of mario image left percentage to an integer and adds 2 percent.
function move(){
    var val = (parseInt(document.getElementById("mario").style.left,10) || 25  ) + 2;
    document.getElementById("mario").style.left = val + "%";
    
// if flag image left percentage is less than or equal to mario image left percentage - 50% from mario image
    var flagPosition = (parseInt(document.getElementById("mario").style.left,10) || 25  );
    var marioPosition = (parseInt(document.getElementById("flag").style.left,10) || 75  );
    if (flagPosition >= marioPosition ){
        var val = (parseInt(document.getElementById("mario").style.left,10) || 25  ) - 50;
        document.getElementById("mario").style.left = val + "%";
        picUnlock();
    }

}

//Adding local storage for unlocking images
function picUnlock(){
    if (typeof(Storage)!== "undefined"){
        var score = parseInt(localStorage.getItem("score"));
        localStorage.setItem("score", ++score);
        document.getElementById("mathText").innerHTML = "You unlcoked A Picture!!!!";
    }else{
        document.getElementById("mathText").innerHTML = "Sorry, your browser does not support local storage. progress will not be saved";
    }
}

function start(){
    unHide();
    sMusic.play();
    randomSymbol();
    noNegative();
    noDoubles();
    randomPlace();
    preventDefault();

}


//functions for chekcing each indavidual buttons answer
function check1(){
    if(document.getElementById("buttonGuess1").innerHTML == answer){
        document.getElementById("mathText").innerHTML = "Correct!!";
        right.play();
        move();
        
    }else{
        document.getElementById("mathText").innerHTML = "Try Again";
        wrong.play();
    }
}
function check2(){
    if(document.getElementById("buttonGuess2").innerHTML == answer){
        document.getElementById("mathText").innerHTML = "Correct!!";
        right.play();
        move();
    }else{
        document.getElementById("mathText").innerHTML = "Try Again";
        wrong.play();
    }
}
function check3(){
    if(document.getElementById("buttonGuess3").innerHTML == answer){
        document.getElementById("mathText").innerHTML = "Correct!!";
        right.play();
        move();
    }else{
        document.getElementById("mathText").innerHTML = "Try again";
        wrong.play();
    }
}
function check4(){
    if(document.getElementById("buttonGuess4").innerHTML == answer){
        document.getElementById("mathText").innerHTML = "Correct!!";
        right.play();
        move();
    }else{
        document.getElementById("mathText").innerHTML = "Try Again.";
        wrong.play();
    }
}
//Button functions to change the background image after unlocked
function fuse1(){
    document.body.style.background="url(unlock1.jpg)";
    document.body.style.backgroundSize="cover";
    document.getElementById("mathBox").style.opacity="0.5";
}
function fuse2(){
    document.body.style.background="url(unlock2.2.png)";
    document.body.style.backgroundSize="cover";
    document.getElementById("mathBox").style.opacity="0.5";
}
function fuse3(){
    document.body.style.background="url(unlock3.2.png)";
    document.body.style.backgroundSize="cover";
    document.getElementById("mathBox").style.opacity="0.5";
}
function fuse4(){
    document.body.style.background="url(unlock4.2.png)";
    document.body.style.backgroundSize="cover";
    document.getElementById("mathBox").style.opacity="0.5";
}
function fuse5(){
    document.body.style.background="url(unlock5.2.png)";
    document.body.style.backgroundSize="cover";
    document.getElementById("mathBox").style.opacity="0.5";
}
function fuse6(){
    document.body.style.background="url(unlock6.2.png)";
    document.body.style.backgroundSize="cover";
    document.getElementById("mathBox").style.opacity="0.5";
}
function fuse7(){
    document.body.style.background="url(unlock7.2.png)";
    document.body.style.backgroundSize="cover";
    document.getElementById("mathBox").style.opacity="0.5";
}
function fuse8(){
    document.body.style.background="url(unlock8.2.png)";
    document.body.style.backgroundSize="cover";
    document.getElementById("mathBox").style.opacity="0.5";
}
function fuse9(){
    document.body.style.background="url(unlock9.2.png)";
    document.body.style.backgroundSize="cover";
    document.getElementById("mathBox").style.opacity="0.5";
}
function fuse10(){
    document.body.style.background="url(unlock10.2.png)";
    document.body.style.backgroundSize="cover";
    document.getElementById("mathBox").style.opacity="0.5";
}




//runs a reset so a new equation can be run
function newEquation(){
    random1 = Math.floor(Math.random()* Math.floor(11));
    random2 = Math.floor(Math.random()* Math.floor(11));
    rg1 = Math.floor(Math.random()* Math.floor(21))
    rg2 = Math.floor(Math.random()* Math.floor(21))
    rg3 = Math.floor(Math.random()* Math.floor(21))
    A= Math.floor(Math.random()* Math.floor(4)); 
    B= Math.floor(Math.random()* Math.floor(2));
    symbol;
    answer;
    g1=0;
    g2=0;
    g3=0;
    g4=0;
    randomSymbol();
    noNegative();
    noDoubles();
    randomPlace();
}
