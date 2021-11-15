const phrase = "When you have to shoot, shoot. Don't talk!";

// 1
const cb1 = (str) => console.log(str);

const isString = (str, cb) => {
  if (typeof str === "string") {
    cb(str);
  }
};

// isString(phrase, cb1);

// 2
const capitalizeFirstLetter = (letter) => letter.toUpperCase();
const cb2 = (str) => str.replace(/ +/g, "-");

const firstWordUpperCase = (str, cb) => {
  str = str.replace(/[a-zA-Z]/, capitalizeFirstLetter);
  return cb(str.trim());
};

// console.log(firstWordUpperCase(phrase, cb2));

// 3
const cb3 = (str) => "Clint Eastwood: " + str;

// console.log(firstWordUpperCase(phrase, cb3));

// 4
const cb4 = (intArr) =>
  intArr.reduce((prevVal, currVal) => {
    return prevVal + currVal;
  });

const sum = (intArr, cb) => {
  return cb(intArr);
};

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], cb4));
