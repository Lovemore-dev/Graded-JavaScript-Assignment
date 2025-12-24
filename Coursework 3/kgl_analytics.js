//Part A: Higher Order Functions - Data Transformation
//1. Working with a file name kgl_analytics.js
//6 procurement record objets using the given structure
let procurementRecords = [
  {
    id: 1,
    dealerName: "Khemis",
    produceType: "Maize",
    tonnageInKgs: 1000,
    costInUgx: 1500000,
    procurementDate: new Date("2025-12-23"),
  },
  {
    id: 2,
    dealerName: "Odongo",
    produceType: "Beans",
    tonnageInKgs: 2500,
    costInUgx: 2000000,
    procurementDate: new Date("2025-12-15"),
  },
  {
    id: 3,
    dealerName: "Okello",
    produceType: "G-nuts",
    tonnageInKgs: 8500,
    costInUgx: 4000000,
    procurementDate: new Date("2025-12-10"),
  },
  {
    id: 4,
    dealerName: "Okeny",
    produceType: "Soya Beans",
    tonnageInKgs: 1000,
    costInUgx: 1600000,
    procurementDate: new Date("2025-12-03"),
  },
  {
    id: 5,
    dealerName: "Otto",
    produceType: "Cow Peas",
    tonnageInKgs: 3500,
    costInUgx: 3500000,
    procurementDate: new Date("2025-10-23"),
  },
  {
    id: 6,
    dealerName: "Otin",
    produceType: "Millet",
    tonnageInKgs: 900,
    costInUgx: 180000,
    procurementDate: new Date("2025-09-23"),
  },
];

//2 .map() method to create new array including a new calculated property
let updatedProcurementRecords = procurementRecords.map((record) => {
  return {
    ...record, //keep existing properties
    costPerKg: parseFloat(record.costInUgx) / parseFloat(record.tonnageInKgs), //calculated property
  };
});
console.log(updatedProcurementRecords);

//3. using the filter() to get tonnageInKgs >=1000
let filterdProcurementRecords = updatedProcurementRecords.filter((record) => {
  return record.tonnageInKgs >= 1000;
});
//logging the filtered array and its length
console.log(filterdProcurementRecords);
console.log(
  `The filtered array has a length of ${filterdProcurementRecords.length}`
);

//4.using the reduce() to calculate total tonnage, total cost then log them out

let totalTonnage = updatedProcurementRecords.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue.tonnageInKgs;
  },
  0
);

let totalCost = updatedProcurementRecords.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue.costInUgx;
  },
  0
);
console.log(`The total tonnage procured is ${totalTonnage}kgs`);
console.log(`The cost of the procurement is ${totalCost}Ugx`);

//Part B: Sets for Unique Data Management
//5. Creating a fuunction getUniqueDealers that takes an array of procurement records as a parameter
let getUniqueDealers = (procurementRecords) => {
  //create a Set
  let uniqueDealer = new Set();
  procurementRecords.forEach((record) => {
    uniqueDealer.add(record.dealer);
  });
  return Array.from(uniqueDealer);
};
//sample procurement data
const procurementData = [
  { dealer: "Groceries Limited", item: "Beans", quantity: 1200, unit: "kg" },
  {
    dealer: "Agro Supply Co.",
    item: "Grain Maize",
    quantity: 3000,
    unit: "kg",
  },
  { dealer: "Groceries Limited", item: "Cow Peas", quantity: 1500, unit: "kg" },
  { dealer: "Harvest Hub", item: "G-nuts", quantity: 2000, unit: "kg" },
  { dealer: "Agro Supply Co.", item: "Soybeans", quantity: 2500, unit: "kg" },
  { dealer: "Bulk Foods Co.", item: "Beans", quantity: 1000, unit: "kg" },
  { dealer: "Groceries Limited", item: "Soybeans", quantity: 1800, unit: "kg" },
];
console.log(getUniqueDealers(procurementData));

//6. Creat a Set called authorizedRoles
let authorizedRoles = new Set();
authorizedRoles.add("Manager");
authorizedRoles.add("Director");

let isAuthorizedForProcurement = (userRole) => {
  return authorizedRoles.has(userRole);
};
console.log(isAuthorizedForProcurement('Director'))
console.log(isAuthorizedForProcurement('Manager'))
console.log(isAuthorizedForProcurement('Sales Agent'))