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
  return {
    id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    produceName: produceName,
    tonnageInKgs: tonnage,
    buyerName: buyerName,
    amountPaid: amountPaid,
    saleDate: new Date(),
    isCreditSale: false,
  };
};
//5. sales record object
const salesRecord = createSalesRecord("Maize", 1500, "Lovemore", 2500);
salesRecord.branch = "Maganjo"; //add new property called "branch" with a value "Maganjo" using dot notation
salesRecord.isCreditSale = true; //modifying "isCreditSale"
salesRecord["dueDate"] = new Date("2026/1/12"); //adding "dueDate" property using bracket notation

//using Object.keys() to get all property names and logging them
console.log(Object.keys(salesRecord));

//6. for....in loop for sales record
for (let sale in salesRecord) {
  console.log(`Property: ${sale} , Value: ${salesRecord[sale]}`);
}

//Part C: Loop Implementation and Data Processing
//7. Creating an array of daily procurement tonnages for a week
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

//traditional for loop to calculate total and average tonnages
let totalTonnage = 0;
for (let index = 0; index < weeklyTonnage.length; index++) {
  totalTonnage += weeklyTonnage[index];
}
console.log(`The total tonnage for the week is ${totalTonnage}kgs`);
//to get average divide the total tonnage by number of items in the array
let averageDailyTonnage = totalTonnage / weeklyTonnage.length;
console.log(`The average daily tonnage is ${averageDailyTonnage}kgs`);

//8. Create an array of sales records using the existing createSalesRecord function
let salesRecords = [
  createSalesRecord("Millet", 1500, "Otto", 20000),
  createSalesRecord("Soya Beans", 1000, "Odongo", 15000),
  createSalesRecord("Sorghum", 2500, "Opio", 10000),
  createSalesRecord("Maize", 1200, "", 13000),
  createSalesRecord("Beans", 1500, "Acen", 20000),
];
//making some records to be isCreditSale = true
salesRecords[1].isCreditSale = true;
salesRecords[4].isCreditSale = true;

let count = 0;
for (sales of salesRecords) {
  if (sales.isCreditSale === true) {
    count++; //when creditsale is true add 1 to isCreditCount
  } else {
    continue;//skip if isCreditSale ==== false
  }
}
console.log(count);
