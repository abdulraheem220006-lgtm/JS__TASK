const List = ["ali", "ahmed", "umer", "hammad", "khabir"];


const deepCopy = JSON.parse(JSON.stringify(List));

deepCopy.unshift("Hamid");
deepCopy.push("Raheem");
const newAdd = "Faiz";
const randomIndex = Math.floor(Math.random(3) * (deepCopy.length +1))
deepCopy.splice(randomIndex,0,newAdd)   
deepCopy[4] = "Musa";
deepCopy.shift(3);
deepCopy.pop(6);

console.log(deepCopy);