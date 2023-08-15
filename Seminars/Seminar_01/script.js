arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

const mergeArray = (arr1, arr2) => arr1.concat(arr2);
const mergeArray1 = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

console.log(mergeArray(arr1, arr2));
console.log(mergeArray1(arr1, arr2));

//---------------------------------------------------------------//

const removeDuplicate = (...numbers) => {
  const arrayNumbers = [...numbers];
  return arrayNumbers.filter((el, index) => {
    return arrayNumbers.indexOf(el) === index;
  });
};

console.log(removeDuplicate(135, 1, 2, 3, 4, 2, 4, 1, 5, 5, 2, 12, 233));

const removeDuplicate1 = (...numbers) => [...new Set([...numbers])];
console.log(removeDuplicate1(135, 1, 2, 3, 4, 2, 4, 1, 5, 5, 2, 12, 233));

//---------------------------------------------------------------//

const getEvenNumbers = (array) => array.filter((el) => el % 2 == 0);

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

//---------------------------------------------------------------//

const calculateAverage = (array) => {
  return array.reduce((total, el) => total + el) / array.length;
};
console.log(calculateAverage([3, 4, 4, 6]));

//---------------------------------------------------------------//

const capitalizeFirstLetter = (string) => {
  return string.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};

console.log(capitalizeFirstLetter("Съешь ещё этих мягких французских булок, да выпей же чаю"));

//---------------------------------------------------------------//

const createCalculator = (arg) => {
  return {
    add(num) {
      console.log(arg + num);
    },
    subtract(num) {
      console.log(arg - num);
    },
  };
};

const calc = createCalculator(20);

calc.add(5);
calc.subtract(2);

//---------------------------------------------------------------//

const createGreeting = (name) => {
  const hi = () => {
    return `hello, ${name}`;
  };
  return hi();
};

const hiName = createGreeting("Alex");
console.log(hiName);

//---------------------------------------------------------------//

const sumDigits = (numb) => {
  console.log(numb);
  if (numb < 10) {
    return numb;
  } else {
    return (numb % 10) + sumDigits(Math.floor(numb / 10));
  }
};

console.log(sumDigits(1223));
