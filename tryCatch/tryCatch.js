// console.log("start");
// try {
//   // Code that might throw an error
//   let num = 10;
//   let result = num/ x;
//   console.log(result);
  
// }
// catch(e){
//   console.log("The custom error", e.message);
// } 
  
// finally {
// console.log("end");
// }
  

console.log("start");

try {
  let num = 10;
  let x = 0;

  if (x === 0) {
    // manually throw a custom error
    throw new Error("Division by zero is not allowed!");
  }

  let result = num / x;
  console.log(result);
}
catch (e) {
  console.log("Custom Error:", e.message);
}
finally {
  console.log("end");
}