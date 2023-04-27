const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits =Object.freeze({
  jonas: 1500,
  matilda: 100,
  obj:{
    test:2
  }
});

spendingLimits.mattia=2000;
spendingLimits.obj.test=10;
console.log(spendingLimits);

const addExpense = function (state,value, description, user='jonas') {
  // if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  // let lim=0;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // }
  const lim=spendingLimits?.[cleanUser] ?? 0;

  if (value > lim) {
    return [...state];
  }
  return [...state,{ value: -value, description, user:cleanUser }];
  // budget.push({ value: -value, description, user:cleanUser });
};
const newBudget=addExpense(budget,10, 'Pizza 🍕');
const newBudget2=addExpense(newBudget,100, 'Going to movies 🍿', 'Matilda');
const newBudget3=addExpense(newBudget2,200, 'Stuff', 'Jay');
console.log(newBudget3);

const checkExpenses = function (budget) {

  return budget.map(el=>{
    const lim=spendingLimits?.[el.user] ?? 0;

    const obj={...el};
    if (obj.value < -lim) {
      obj.flag = 'limit';
    }

    return obj;
  });
  // budget.forEach(el=>{
  //   // let lim=0;
  //   // if (spendingLimits[el.user]) {
  //   //   lim = spendingLimits[el.user];
  //   // }
  //   const lim=spendingLimits?.[el.user] ?? 0;
  //
  //   if (el.value >= -lim) {
  //     return;
  //   }
  //
  //   el.flag = 'limit';
  //
  // });
};
const updatedBudget=checkExpenses(newBudget3);
console.log(updatedBudget);

console.log(budget);

const logBigExpenses = function (budget,limit) {
  // let output = '';
  // budget.forEach(el=>{
  //   if (el.value > -limit) {
  //     return;
  //   }
  //
  //   output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
  // });
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
  const output=budget.filter((el)=>el.value<=-limit)
    // .map(el=>el.description.slice(-2))
    // .join("/")
    .reduce((str,curr)=>`${str}/${curr.description.slice(-2)}`,"");
  console.log(output);
};
logBigExpenses(updatedBudget,100);
