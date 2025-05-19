//funcção sem argumentos
function helloClass(){
    alert('olá turma de Software Developer');
}

function helloPerson(){
    alert('olá António');
}


//função com argumentos, fica abastracta e reutilizável
function hello(greetScope){
    alert('olá '+greetScope)
}

function sum(x, y){
   let total = x+y
  return total;
}

let total2 = sum(4, 6)
console.log(total2)
