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

//pp 86
function firstNames(){
    //array original
    const fullNames = [
        {first: 'Albus', last: 'Dumbledore'}, 
        {first: 'Harry', last: 'Potter'},
        {first: 'Hermione', last: 'Granger'}, 
        {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'},
        {first: 'Minerva', last: 'McGonagall'}, 
        {first: 'Severus', last: 'Snape'}
    ];

    //array mapeado (cria um novo array)
    const firstNames = fullNames.map(function(name){
        return name.first;
    })

    //array original tranformado para dizer o primeiro e o último nome
    fullNames.forEach(function(item){
        console.log(item.first + ' '+item.last)
        }
    )

}


//ex 88
const greet = name => 'olá '+name;

//ex 94
function validUsernames(arrUserNames){

        const filteredUsernames = arrUserNames.filter( username =>{
        return username.length<10 
        }
    )
     
    return filteredUsernames;
}

//pp97
function allEvens(arrNumbers){
    return arrNumbers.every(number => number%2 === 0)

}
