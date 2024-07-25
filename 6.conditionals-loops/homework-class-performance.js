let students = [
  {
    name: 'John Javascript',
    age: 17,
    score: 25,
  },
  {
    name: 'Emily Jones',
    age: 19,
    score: 95,
  },
  {
    name: 'Arthur Morgan',
    age: 18,
    score: 15,
  },
  {
    name: 'Gaius Julius Caesar Octavianus',
    age: 15,
    score: 94,
  },
  {
    name: 'Felix-Octavian Apostol',
    age: 18,
    score: 93,
  },
];

// 1.
if (students[4].score >= 50) {
  console.log(
    `Congratulations, ${students[4].name}, you have passed the exam with the score of ${students[4].score}.`
  );
} else {
  console.log(
    `I'm sorry, ${students[4].name}, but you have failed the exam with the score of ${students[4].score}.`
  );
}

// 2.
let passedStudents = 0;
let failedStudents = 0;

for (let i = 0; i < students.length; i++) {
  console.log(
    `Student: ${students[i].name}, age: ${students[i].age}, score: ${students[i].score}.`
  );
  if (students[i].score >= 50) passedStudents++;
  else failedStudents++;
}

console.log(`Passed students: ${passedStudents}`);
console.log(`Failed students: ${failedStudents}`);

// 3. && 4.
let bestScore = 0;
let worstScore = 100;
let isTheOldest = true;
let bestStudentAge;
let bestStudentName;

for (let i = 0; i < students.length; i++) {
  if (students[i].score > bestScore) {
    bestScore = students[i].score;
    bestStudentName = students[i].name;
    bestStudentAge = students[i].age;
  }
  if (students[i].score < worstScore) {
    worstScore = students[i].score;
  }
}

for (let i = 0; i < students.length; i++) {
  if (students[i].age > bestStudentAge) isTheOldest = false;
}

let interpolation = `Best student is ${bestStudentName}, with the score of ${bestScore}, higher by ${
  bestScore - worstScore
} than the worst score.`;

console.log(
  isTheOldest === true
    ? interpolation.concat(' The oldest is the wisest.')
    : interpolation
);
