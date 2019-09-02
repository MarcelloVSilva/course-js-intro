this.name = "Marcello";

function sayMyName() {
  const [age, func] = arguments;
  console.log(this.name, age);
  func && func.call(this);
}

const dev = {
  name: "Silva"
};

function sayBye() {
  console.log(`bye ${this.name}`);
}

sayMyName.call(this, 23);
sayMyName.call(dev, 20);

sayMyName.apply(this, [23, sayBye]);

function multiply() {
  const args = Array.from(arguments);
  return args.reduce((acc, item) => {
    return acc * item;
  }, 1);
}

const total = multiply.apply(this, [1, 2, 3, 4, 5]);
console.log(total);

const boundSayMyName = sayMyName.bind(dev);
boundSayMyName(21, sayBye);
