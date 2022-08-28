// PH 22-3 Explore string nature and reverse a string


const Greetings = 'Hello World';

function reserveString(text){
let reverse = '';
    for (let letter of text){
        console.log(letter);
reverse = letter + reverse;

    }
    return reverse;
}
const reversed = reserveString(Greetings);
console.log (reversed);