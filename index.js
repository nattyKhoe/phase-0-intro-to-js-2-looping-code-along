// Code your solutions in this file
function writeCards(name,eventName){
    let message = [];
    for (let i=0; i<name.length; i++){
        message[i] = `Thank you, ${name[i]}, for the wonderful ${eventName} gift!`;
    }
    return message;
}

function countDown (n){
    while (n>=0){
        console.log(n);
        n--;
    }
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));