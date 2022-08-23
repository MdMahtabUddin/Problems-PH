

function furnitureCalculator(chairQuantity , bedQuantity , tableQuantity){

const perChairWood =3;
const perBedWood =30;
const perTableWood =10;

// wood calculation

const chairWood = chairQuantity * perChairWood;
const bedWood = bedQuantity * perBedWood;
const tableWood = tableQuantity *perTableWood;
totalWood = chairWood + bedWood +tableWood;
// console.log(totalWood);

return totalWood;
}

const furnitureMade =furnitureCalculator(10,5,5);
console.log(furnitureMade);