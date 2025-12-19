//Coursework 1: KGL Data Validation System
//Part A: Variable Declaration and Type Checking

//1.  Declaring variables with let or const keywords
const companyName = "Karibu Groceries LTD";
const minimumTonnage = 1000;
let isOperational = true;
let managerName;
const closedBranches = null;

//2. Type checkinng using typeof operstion
console.log(`The data type of companyName is ${typeof companyName}`);
console.log(`The data type of minimumTonnage is ${typeof minimumTonnage}`);
console.log(`The data type of isOperational is ${typeof isOperational}`);
console.log(`The data type of managerName is ${typeof managerName}`);
console.log(`The data type of closedBranches is ${typeof closedBranches}`);

//3. comments explaining why I chose let or const for each variable

//I chose to use 'const' for 'companyName' because the company name will not change
//I choose to use 'const' for 'minimumTonnage' because the minimum tonnage should not change to prevent low procurement
/*
I chose to use 'let' for is'isOperational' because
the state of being operational can change from being true to false
*/
//I chose to use 'let' for 'managerName' because a manager can be replaced
/*
I chose to use 'const' for 'closedBranches' because 
when a branch is closed it shoould not accidentally 
be included in the list of open branches 
*/

//Part B: String Manipulation and Validation
//4. variable declaration and initialization
let dealerNameInput = " james BOND ";

//5. code to remove the whitespaces
let noSpaceDealerName = dealerNameInput.trim().toLowerCase();
//codes to make capital the first letters of the name
let properTitleCase = noSpaceDealerName
  .split(" ")
  .map(
    (namePart) => namePart[0].toUpperCase() + namePart.slice(1).toLowerCase()
  )
  .join(" ");
let cleanDealerName = properTitleCase;
console.log(`Cleaned Dealer Name:${cleanDealerName}`);

//6. Validation check using comparison operators to verify cleanDealerName
if (cleanDealerName.length > 2) {
  if (cleanDealerName != "") {
    console.log("Valid dealer name");
  }
} else {
  console.log("Invalid dealer name");
}

//Part C: Conditional Logic and Business Rules
//7. Variables for procurement record
let userRole = "Sales Agent";
let procurementTonnage = 1500;
let produceType = "Beans";
let costInUgx = "50000";

//8. Implementing KGL business rules
//Rule 1
if (userRole === "Sales Agent") {
  console.log("Sales agents can't record procurements!");
} else if (procurementTonnage >= 1000) {
  //rule 2
  let cost = Number(costInUgx);
  if (cost >= 10000) {
    //rule 3
    //console.log("valid record");//This is commmented out because the question didn't require a log for it
  } else {
    //console.log("cost is less than 5 digits");//This is commmented out because the question didn't require a log for it
  }
} else {
  //console.log("low tonnage"); //This is commmented out because the question didn't require a log for it
}

//9. Use the logical AND(&&) operator
if (procurementTonnage >= 1000 && Number(costInUgx) >= 10000) {
  console.log("Procurement record valid");
} else {
  console.log("Procurement record invalid");
}

//Part D: Arrays and Produce Management
//10. creating array
let kglProduce = ["Beans", "Grain Maize", "Cow peas", "G-nuts", "Soybeans"];

//11. code to add, remove and log final array
kglProduce.push("Green Peas"); //adding green peas
kglProduce.shift(); // removing the first item from the array
kglProduce.includes("G-nuts"); //checking for g-nuts in the array

console.log(kglProduce);

console.log(`The length of the final array is ${kglProduce.length}`);

//12.second array
let branch2Produce = ["Maize", "Beans"];
//merging the array to kglProduce array
let allProduce = branch2Produce.concat(kglProduce);
