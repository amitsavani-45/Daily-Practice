/*
Here’s a clear, beginner-friendly explanation of **JavaScript Asynchronous – What it is & Why it’s used**.

---

## What is Asynchronous JavaScript?

**Asynchronous JavaScript** means **JavaScript can start a task and continue executing other code without waiting for that task to finish**.

Normally, JavaScript is **synchronous** and **single-threaded**, meaning:

* It executes code **line by line**
* Each line **waits** for the previous one to finish

### Synchronous example (blocking):

```js
console.log("Start");

alert("Hello"); // blocks everything until closed

console.log("End");
```

---

### Asynchronous example (non-blocking):

```js
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 2000);

console.log("End");
```

**Output:**

```
Start
End
Hello
```

JavaScript doesn’t wait 2 seconds — it continues running the next code.

---

## Why is Asynchronous JavaScript Needed?

Because many operations take **time**, such as:

* Fetching data from a server (API calls)
* Reading files
* Database operations
* Timers (`setTimeout`, `setInterval`)
* User interactions (clicks, inputs)

If JavaScript waited for these tasks, the webpage would **freeze** 

### Without async:

* Page becomes unresponsive
* Poor user experience

### With async:

* Page remains interactive 
* Faster and smoother applications

---

*/
console.log("1");
setTimeout(function(){console.log("A");},3000);
console.log("2");
setTimeout(function(){console.log("B");},1000);
f1();
console.log("4");
setTimeout(function(){console.log("C");},2000);
console.log("5");
f1();
console.log("6");
function f1(){
  console.log("hello");
}