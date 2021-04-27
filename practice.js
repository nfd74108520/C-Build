let promise1 = Promise.resolve(35);
let promise2 = Promise.resolve(promise1);

promise2.then((value) => console.log(value));
