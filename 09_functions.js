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
