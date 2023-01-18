const sentence = "hello there from lighthouse labs";

for (const index in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[index]);
  }, 50 * index);
}


/*
let delay = 50;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50);
}
*/


setTimeout(() => {
  process.stdout.write('\n');
}, 50 * sentence.length);

