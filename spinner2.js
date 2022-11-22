process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spinArray =  ["\r|    ", "\r/    ", "\r-    ", "\r\\    ", "\r|    ", "\r/    ", "\r-    ", "\r\\    ", "\r|    "];
let timer = 100
for (let i of spinArray)  {
  timer += 200;
  setTimeout(() => {
    process.stdout.write(i);
  }, timer);
};
