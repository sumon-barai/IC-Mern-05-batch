/* const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter(function (currentValue, index, arr) {
  if (currentValue % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(result); */

const students = [
  { id: 1, name: "Rahim", age: 20, subject: "JavaScript", score: 85 },
  { id: 2, name: "Karim", age: 21, subject: "React", score: 90 },
  { id: 3, name: "Sumi", age: 19, subject: "Node.js", score: 78 },
  { id: 4, name: "Nabila", age: 22, subject: "MongoDB", score: 88 },
  { id: 5, name: "Hasan", age: 23, subject: "HTML", score: 92 },
  { id: 6, name: "Rifat", age: 20, subject: "CSS", score: 80 },
  { id: 7, name: "Anika", age: 21, subject: "Tailwind", score: 86 },
  { id: 8, name: "Sabbir", age: 24, subject: "Express", score: 75 },
  { id: 9, name: "Mim", age: 19, subject: "Next.js", score: 89 },
  { id: 10, name: "Tuhina", age: 22, subject: "TypeScript", score: 91 },
];

const output = students.filter(function (currentValue, index, arr) {
  if (currentValue.name.toLowerCase().includes("a")) {
    return true;
  } else {
    return false;
  }
  // return currentValue.score >= 90 ? true : false;
});

console.log(output);
