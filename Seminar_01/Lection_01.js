const studentsGroup1PracticeTime = [
  {
    firstName: "Ivanov",
    practiceTime: 56,
  },
  {
    firstName: "Petrov",
    practiceTime: 120,
  },
  {
    firstName: "Sidorov",
    practiceTime: 148,
  },
  {
    firstName: "Belkin",
    practiceTime: 20,
  },
  {
    firstName: "Avdeev",
    practiceTime: 160,
  },
];
const studentsGroup2PracticeTime = [
  {
    firstName: "Mankov",
    practiceTime: 87,
  },
  {
    firstName: "Kistin",
    practiceTime: 133,
  },
  {
    firstName: "Kotlyarov",
    practiceTime: 140,
  },
  {
    firstName: "Peskov",
    practiceTime: 10,
  },
];

const maximum = findMax(4, 7, 10);

function findMax() {
  const values = arguments;

  let maxValue = -Infinity;

  for (let index = 0; index < values.length; index++) {
    if (values[index] > maxValue) maxValue = values[index];
  }
  return maxValue;
}

const group1PracticeTime = studentsGroup1PracticeTime.map((student) => student.practiceTime);
console.log(group1PracticeTime);
const group2PracticeTime = studentsGroup2PracticeTime.map((student) => student.practiceTime);
console.log(group2PracticeTime);

const maxTimeFromGroup1 = findMax(...group1PracticeTime);

console.log(maxTimeFromGroup1); // 160
const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2); // 140

const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups); // 160
console.log(findTopThreeMax(...bothGroupsTime));

//--------------------------------//

const generateArray = (length, min, max) =>
  [...new Array(length)].map(() => Math.floor(Math.random() * (max - min + 1) + min));
//
const numbers = generateArray(1000, -4000, 4000);
//
console.log(numbers);
//--------------------------------//

function findTopThreeMax(...rest) {
  const values = arguments;

  let maxValue = [-Infinity, -Infinity, -Infinity];

  for (let index = 0; index < values.length; index++) {
    minimum = Math.min(...maxValue);
    if (values[index] > minimum) {
      maxValue[maxValue.indexOf(minimum)] = values[index];
    }
  }
  console.log(...rest);
  return maxValue;
}

console.log(findTopThreeMax(...numbers));

//--------------------------------//

const student = {
  firstName: "Ivan",
  age: 21,
};

const getYearOfBirth = (currentYear) => {
  return currentYear - student.age;
};

console.log(getYearOfBirth(2021));

student.age = 25;
console.log(getYearOfBirth(2021));

const getYearOfBirthPureVersion = (age, currentYear) => {
  return age - currentYear;
};

const addField = (object, key, value) => {
  object[key] = value;
  return object;
};

const updatedStudent = addField(student, "lastName", "Belkin");

console.log(student);
console.log(updatedStudent);

const addFieldPureVersion = (object, key, value) => {
  return {...object, [key]: value};
};

const updatedStudentPure = addFieldPureVersion(student, "practiceTime", 148);
console.log(student);
console.log(updatedStudentPure);
//--------------------------------//
let count = 0;
const upCount = () => {
  return count++;
};

console.log(upCount());
console.log(upCount());
console.log(upCount());
console.log(upCount());

const createCounter = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
//--------------------------------//
