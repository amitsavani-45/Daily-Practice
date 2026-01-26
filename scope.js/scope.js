let x = 10;   // Global variable

function show() {
  console.log(x);
}

show();
console.log(x);


if (true) {
  let a = 5;
  const b = 6;
  console.log(a, b);
}

console.log(a); // Error
console.log(b); // Error
