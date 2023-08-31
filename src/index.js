let number = prompt('Enter number');

if (number % 3 === 0 && number % 5 === 0) {
  console.log('FizzBuzz');
} else if (number % 3 === 0) {
 console.log('Fizz');
} else if (number % 5 === 0) {
   console.log('Buzz');
} 


// const userInput = prompt('Enter number');

// let accessAllowed;

// if (userInput % 4 == 0 && userInput % 100 !== 0 || userInput % 400 == 0) {
//     accessAllowed = 'Так';
// } else {
//     accessAllowed = 'Ні';
// }
// console.log(accessAllowed);

// let age = prompt('Скільки Вам років?', '');

// if (age % 10 === 1 && age % 100 !== 11) {
//      console.log('Вам ' + age + ' рік!');
// } else if (2 <= age % 10 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
//      console.log('Вам ' + age + ' роки!');
// } else {
//     console.log('Вам ' + age + ' років!');
// }
