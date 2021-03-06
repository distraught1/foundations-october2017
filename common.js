function pyth(sideA, sideB){
    var cSquared = sideA*sideA + sideB*sideB;
    var sideC = Math.sqrt(cSquared);
    return sideC;
}

function randomNumber(min, max){
    var diff = max - min;
    var number = Math.round(Math.random()*diff)+min;
    return number;
}

function randomColor(){
    var red = randomNumber(0, 255);
    var green = randomNumber(0, 255);
    var blue = randomNumber(0, 255);
    return "rgb("+red+","+green+","+blue+")";
}

function randomColorAlpha(alpha){
    var red = randomNumber(0, 255);
    var green = randomNumber(0, 255);
    var blue = randomNumber(0, 255);
    return "rgba("+red+","+green+","+blue+","+alpha+")";
}