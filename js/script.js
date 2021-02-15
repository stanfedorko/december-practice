//- 21

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
// arr[99] = 0;
// console.log(arr.length);
console.log(arr);

function compareNum(a, b) {
  return a- b;
}


// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внктри массива ${arr}`);
// });


// arr.pop(); // remove
// arr.push(10); // add 
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// console.log(arr);


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

//- end 21