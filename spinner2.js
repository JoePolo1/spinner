process.stdout.write('hello from spinner1.js... \rheyyy\n');

// let spinArray =  ["\r|    ", "\r/    ", "\r-    ", "\r\\    ", "\r|    ", "\r/    ", "\r-    ", "\r\\    ", "\r|    "];
// let timer = 100
// for (let i = 0; i < spinArray.length; i++)  {
//   timer += 200;
//   setTimeout(() => {
//     process.stdout.write(spinArray[i]);
//   }, timer);
// };

//REFACTORED BELOW with a for of loop:

process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spinArray =  ["\r|    ", "\r/    ", "\r-    ", "\r\\    ", "\r|    ", "\r/    ", "\r-    ", "\r\\    ", "\r|    "];
let timer = 100
for (let i of spinArray)  {
  timer += 200;
  setTimeout(() => {
    process.stdout.write(i);
  }, timer);
};
