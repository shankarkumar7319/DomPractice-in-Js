//Async and await
async function main() {
  console.log("Start process..."); 

  // Step 1: Open app 

  await new Promise((resolve) => setTimeout(resolve, 2000)); 
  console.log("Step 1: Opened app"); 

  // Step 2: Searching for a movie 

  await new Promise((resolve) => setTimeout(resolve, 5000)); 
  console.log("Step 2: Searching for a movie"); 

  // Step 3: Select Seats 

  await new Promise((resolve) => setTimeout(resolve, 8000)); 
  console.log("Step 3: Select seats"); 

  // Step 4: Ticket booked 

  await new Promise((resolve) => setTimeout(resolve, 1000)); 
  console.log("Step 4: Ticket Booked"); 

  console.log("Process complete!"); 
} 
main();