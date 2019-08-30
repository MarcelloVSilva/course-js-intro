// array of string
let cities = ["Goiânia", "Goianira", "Anápolis", "Inhumas"];
// array of number
let listNumbers = [10, 20, 30, 40];
// array of boolean
let listBoolean = [true, true, false, true];
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
  }
];

// acesso de itens
cities[0]; // Goiânia
cities[1]; // Goianira
cities[2]; // Anápolis
cities[3]; // Inhumas

// array usa uma estrutura de armazenamento no modelo de PILHA
// FILO => First In Last Out
let studants = [];
studants.push("Mario");
studants.push("Sonic");
studants.push("Crash");
console.log(studants); // [ 'Mario', 'Sonic', 'Crash' ]
studants.pop();
console.log(studants); // [ 'Mario', 'Sonic' ]

// tamanho do array
studants.length; // 3

// alterar um valor
studants[0] = "Wolverine";
console.log(studants); // [ 'Wolverine', 'Sonic', 'Crash' ]

// métodos de manipulação de array
// map
// forEach
// filter
// find
// fill
// some
// every
// reduce
// reverse

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
