const abc = "abc";
let abcd = "abcd";

var demo = "demo";
test = "test";

// console.log(abc);
//console.log(abcd); // abcd is a variable

/*

console.log(demo); 
console.log(test);

*/

// const age = undefined;

const person = {
  name: "rahul",
};

const list = ["apple", "mango"];

// console.log(list instanceof Array);

/* for (let i = 0; i < 50; i++) {
  console.log("hello world");
} */

// const name = "sumon";
// const city = "khulna";
// const university = "national university";
// const age = 25
// const weight = 25

// const data = ["sumon", "khulna", "national university", 25, 25, true];

// const name = data[0];
// const city = data[1];
// const university = data[2];
// const age = data[3];
// const weight = data[4];

// const [, city, , , , bool] = data;

// console.log(bool);
// console.log(city);

const info = {
  name: "sumon",
  city: "khulna",
  university: "national university",
  age: 25,
  weight: 25,
  address: {
    road: "KDA Avenue",
    phone: "0191500000",
  },
};

const info1 = {
  name: "sumon",
  city: "khulna",
  university: "national university",
  age: 25,
  weight: 25,
  address: {
    road: "KDA Avenue",
    phone: "0191500000",
    age: {
      sumon: "good boy",
    },
  },
};

console.log(info.address?.age?.sumon);

/* 
const keys = Object.keys(info);
const values = Object.values(info);
console.log(keys);
console.log(values); */
