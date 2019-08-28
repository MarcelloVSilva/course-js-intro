// conceitos e exemplos básicos no javascript

// declarações
const name = "Marcello Silva"; // imutável
let firstName = "";
var lastName = "";

// tipos de variáveis
let state = "Goiás";
// number
let age = 85;
// boolean
let isHot = true;
// array of string
let cities = ["Goiânia", "Goianira", "Anapolis", "Inhumas"];
// array of number
let cities = [10, 20, 30, 40];
// array of boolean
let cities = [true, true, false, true];
// objects 
let goiania = {
  age: 85,
  isHot: true,
  state: "Goias"
};
let saoJoaquim = {
  age: 132,
  isHot: false,
  state: "Santa Catarina"
}
// array of objects
let citiesArrayOfObjects = [
  {
    name: "Goiânia",
    age: 85,
    isHot: true
  },
  {
    name: "São Joaquim",
    age: 132,
    isHot: false
  },
]

// condições
if (true) {
  // código a ser executado
}
else {
  // código a ser executado
}

if (goiania.isHot) {
  console.log("Goiânia é quente")
}
else {
  console.log("Goiânia não é quente")
}

if (goiania.isHot && saoJoaquim.isHot) {
  console.log("Goiania e São Joaquim são quentes")
}
else {
  console.log("Goiania e/ou São Joaquim não são quentes")
}

if (goiania.isHot || saoJoaquim.isHot) {
  console.log("Goiania e/ou São Joaquim são quentes")
}
else {
  console.log("Goiania e São Joaquim não são quentes")
}

if (cities.length > 3) console.log("O Array tem mais que 3 itens")
if (cities[0] === "Goiânia") console.log("Goiania é a primeira cidade do array")
if (cities[cities.length - 1] === "Inhumas") console.log("Inhumas é a última cidade do array")
if (cities.indexOf("Anapolis") > -1) console.log("Anapolis é uma cidade do array")
if (goiania.age > saoJoaquim.age) console.log("Goiania é mais velha que São Joaquim")
if (goiania.age < saoJoaquim.age) console.log("Goiania é mais nova que São Joaquim")
if (goiania.age === saoJoaquim.age) console.log("Goiania e São Joaquim tem a mesma idade")
if (goiania.age >= 100) console.log("Goiania tem 100 ou mais anos")
if (goiania.state === "Goias") console.log("Goiânia está no estado de Goiás")
if (goiania.state === saoJoaquim.state) console.log("Goiânia e São Joaquim são do mesmo estado")
if (goiania.state !== saoJoaquim.state) console.log("Goiânia e São Joaquim não são do mesmo estado")
if (goiania.age >= 100 && saoJoaquim.age >= 100) console.log('Goânia e São Joaquim tem 100 anos ou mais')

function sumA(a, b) {
  return a + b;
}

function sumB(a, b) {
  let result = a + b;
  return result;
}

function sumC(a = 0, b = 0) {
  let result = a + b;
  return result;
}

const sumD = (a, b) => {
  return a + b;
};

console.log("result of 1+1 in sumA: ", sumA(1, 1));
console.log("result of 1+1 in sumB: ", sumB(1, 1));
console.log("result of 1+1 in sumC: ", sumC(1, 1));
console.log("result of 1+1 in sumD: ", sumD(1, 1));
