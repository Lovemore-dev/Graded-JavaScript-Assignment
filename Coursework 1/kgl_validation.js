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
if(cleanDealerName.length>2){
    if(cleanDealerName != ""){
        console.log("Valid dealer name")
    }
}else{
    console.log("Invalid dealer name")
}
