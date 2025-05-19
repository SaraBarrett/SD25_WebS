//pp 65

function printHeart(){
    alert('<3');
}
function rant(message){
    for(let i=0; i<3; i++){
        console.log(i+message.toUpperCase());
    } 
}
function tellMeWhatYouHate(){
    let hate = prompt('diz-me o que odeias?')
    rant(hate)
}

//pp72
function isSnakeEyes(num1, num2){
    if((num1 ==1) && num1== num2){
        console.log("yay, snake eyes")
    }else{
        console.log("not snake eyes")
    }

}