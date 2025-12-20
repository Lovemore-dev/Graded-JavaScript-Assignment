//Part A: Function Implementation
//1. Function named calculateProcuremmentCost
function calculateProcurementCost(tonnageInKg, pricePerKg) {
  let totalCost = tonnageInKg * pricePerKg;
  if (
    typeof tonnageInKg !== "number" ||
    typeof pricePerKg !== "number" ||
    tonnageInKg < 0 ||
    pricePerKg < 0
  ) {
    return "Invalid input";
  }
  return totalCost;
}

// console.log(calculateProcurementCost("100", 150));   // log to test the parameter and condition

//2. Arrow function named validBuyerName
const validBuyerName = (buyerName) => {
  if (buyerName.length >= 2 && buyerName != "") {
    return true;
  } else {
    return false;
  }
};
// console.log(validBuyerName("Lovemore")) //Log to test the condition

//3. function named checkUserAuthorization
const checkUserAuthorization = (role) => {
  switch (role) {
    case "Manager":
      return "procurement_and_sales";
    case "Sales Agent":
      return "sales_only";
    case "Director":
      return "view_aggregations";
    default:
      return "unauthorized";
  }
};
// console.log(checkUserAuthorization("Manager")) //Log to check the switch statement

//Part B: Object Creation and Manipulation

//4. function createSalesRecord

const createSalesRecord = (produceName, tonnage, buyerName, amountPaid) => {
  return{id:Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,produceName:produceName,tonnageInKgs:tonnage,buyerName:buyerName,amountPaid:amountPaid,saleDate:new Date(),isCreditSale:false}
};
//5. sales record object
const salesRecord=createSalesRecord("Maize",1500,"Lovemore",2500)
salesRecord.branch="Maganjo"; //add new property called "branch" with a value "Maganjo" using dot notation
salesRecord.isCreditSale = true; //modifying "isCreditSale"
salesRecord["dueDate"] =new Date("2026/1/12") //adding "dueDate" property using bracket notation

//using Object.keys() to get all property names and logging them
console.log(Object.keys(salesRecord));

//6. for....in loop for sales record
for(let sale in salesRecord){
 console.log(`Property: ${sale} , Value: ${salesRecord[sale]}`);
 
}


