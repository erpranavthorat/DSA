let rows = 3;
let pattern = "";

for (let n = 1; n <= rows; n++) {
  for (let numbers = 1; numbers <= n; numbers++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);
