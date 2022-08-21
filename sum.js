// const number = [45, 66, 70, 27];
// let sum =0;
// for (let i =0; i< number.length; i++){
//     const element = number[i];
    
//     sum += element;
//     console.log(sum);
// }


function myNumber (number){
    let sum =0;
for (let i =0; i< number.length; i++){
    const element = number[i];
    sum +=element;
}
    return sum;
}
const total= myNumber([67,50,45,92]);

console.log(total);
