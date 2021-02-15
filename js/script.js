//- 20

// function first() {
//   // Do something
//   setTimeout(function() {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`I learn: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('I completed this lesson!')
// }

// learnJS('JavaScript', done);


const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    console.log('Test');
  }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);
console.log(bg);

// console.log(options.colors);
// delete options.height;
// console.log(options);

// for (let key in options) {
//   console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

// let counter = 0;

// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);

// console.log(Object.keys(options).length);

//- end 20