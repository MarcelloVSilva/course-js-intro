// objects
let goiania = {
  age: 85,
  isHot: true,
  state: "Goias"
};
let state = {
  name: "Goias",
  belongsTo: "Brasil"
};

// acessar propriedades do objeto
goiania.age;
goiania.isHot;
goiania.state;

// adicionar propriedade
goiania.isCool = true;

// remover uma propriedade
delete goiania.age;

// acesso dinâmico à uma propriedade
let prop = "age";
goiania[prop];

// Usado por exemplo quando uma função sempre acessa
// uma propriedade de um certo objeto, mas a propriedade
// sempre muda de acordo com o parâmetro passado
function getKeyValue(key) {
  return goiania[key];
}
// chamada da função
console.log(getKeyValue("isHot"));

// junção de dois objetos = SPREAD
let newObject = {...state, ...goiania};
console.log(newObject);

console.log(goiania);
