// 23_5-1 Understand for loop in a forward and reverse way
// নিজের ভিতর থেকে নিজেকে কল করাকে রিকাড়শন বলে । 

function number (i){
    if(i>5){
        return;
    }
    console.log(i)
    // function call 
    number(i+1)
}

number(1);
