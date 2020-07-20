// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
  /*Since the nested function in side the myFunction it can access the variable internally, nestedFunction() can go out and access the variable,
   but myFunction() can't access the variable inside the nestedFunction(). */


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(x) {
  let y = 0;
  for (let i = 1; i <= x; i++){
    y = y + i;
  }
  return y;
}
console.log("The Summation of 4: ", summation(4));