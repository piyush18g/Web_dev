function roll(){
    var a1=Math.floor(Math.random()*6)+1;
    var a2=Math.floor(Math.random()*6)+1;
    var s1="./images/dice"+a1+".png";
    var s2="./images/dice"+a2+".png";
    document.getElementsByClassName("img1")[0].setAttribute("src",s1);
    document.getElementsByClassName("img2")[0].setAttribute("src",s2);
    if (a1>a2) {
        document.querySelector("h1").innerHTML="Player 1 wins!";
    }
    else if ( a1==a2){
        document.querySelector("h1").innerHTML="Draw!";
    }
    else {
        document.querySelector("h1").innerHTML="Player 2 wins!";
    }
}
document.addEventListener("keydown", function(event){
    console.log(event);
});
