// PH- 21.3 Find max of two values, find max of three values

const business =700;
const minister =1500;
const army =900;
// compare with 3 
// if (business > minister && business > army){
//     console.log('Business is bigger');
// } else if (minister > business && minister > army){
//     console.log('minister is bigger');
// }else{
//     console.log('army is bigger');
// }

// another way 

var max = Math.max(business,minister,army);
console.log('largest is', max);
