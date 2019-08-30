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
};

let citiesString = ["Goiânia", "Goianira", "Anapolis", "Inhumas"];

// condições
if (true) {
  // código a ser executado
} else {
  // código a ser executado
}

if (goiania.isHot) {
  console.log("Goiânia é quente");
} else {
  console.log("Goiânia não é quente");
}

if (goiania.isHot && saoJoaquim.isHot) {
  console.log("Goiania e São Joaquim são quentes");
} else {
  console.log("Goiania e/ou São Joaquim não são quentes");
}

if (goiania.isHot || saoJoaquim.isHot) {
  console.log("Goiania e/ou São Joaquim são quentes");
} else {
  console.log("Goiania e São Joaquim não são quentes");
}

if (citiesString.length > 3) {
  console.log("O Array tem mais que 3 itens");
}
if (citiesString[0] === "Goiânia") {
  console.log("Goiania é a primeira cidade do array");
}
if (citiesString[citiesString.length - 1] === "Inhumas") {
  console.log("Inhumas é a última cidade do array");
}
if (citiesString.indexOf("Anapolis") > -1) {
  console.log("Anapolis é uma cidade do array");
}
if (goiania.age > saoJoaquim.age) {
  console.log("Goiania é mais velha que São Joaquim");
}
if (goiania.age < saoJoaquim.age) {
  console.log("Goiania é mais nova que São Joaquim");
}
if (goiania.age === saoJoaquim.age) {
  console.log("Goiania e São Joaquim tem a mesma idade");
}
if (goiania.age >= 100) {
  console.log("Goiania tem 100 ou mais anos");
}
if (goiania.state === "Goias") {
  console.log("Goiânia está no estado de Goiás");
}
if (goiania.state === saoJoaquim.state) {
  console.log("Goiânia e São Joaquim são do mesmo estado");
}
if (goiania.state !== saoJoaquim.state) {
  console.log("Goiânia e São Joaquim não são do mesmo estado");
}
if (goiania.age >= 100 && saoJoaquim.age >= 100) {
  console.log("Goânia e São Joaquim tem 100 anos ou mais");
}
