const name = "Marcello Silva";
let modifiedName;
// alguns métodos para manipulação de string

// tamanho da string
modifiedName = name.length;

// identificar em que posição da string está o que foi pesquisado
// quando não é encontrado é retornado -1
modifiedName = name.indexOf("cello");

// identificar um caracter pela posição pesquisada
// quando não é encontrado é retornado ""
modifiedName = name.charAt(6);

// formar uma sub string a apartir da string original
// primeiro parametro indica o início e o tamanho da sub string
modifiedName = name.substr(0, 8);
modifiedName = name.slice(0, 8);

// troca a primeira ocorrência correspondente ao que foi passado
// no primeiro parametro pelo o que for passado no segundo parametro
modifiedName = name.replace("a", "_");

// transforma a string em um array de strings
modifiedName = name.split(" ");

// concatenação de duas strings, a atual com a que for passada
modifiedName = name.concat(" Costa e Silva");
// outro modo que faz o concat
modifiedName = name + " Costa e Silva";

console.log(modifiedName);
