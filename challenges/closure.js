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

// Explanation: The reason why it can access the variable internal is because of it being enclosed within its lexical environment. The Child (nestedFunction()) can see what the parent is doing but the parent cannot see what the child is doing.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
let sum =  0
function summation(number){
   for(var i = 0; i <= number; i++)
   sum += i;
   console.log(sum);


}

summation(4);


