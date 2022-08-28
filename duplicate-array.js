// 22-2 Remove duplicate items from an array

const names =['shawon','mona','rubel','pavel','shawon','mona','rubel','pavel'];

function removeDuplicate (){
    const unique = [];
for (let element of names){
    console.log(element);
    if(unique.indexOf(element)== -1){
        unique.push(element);
    }
}
 return unique;


}

const uniqueName = removeDuplicate(names);
console.log(uniqueName)