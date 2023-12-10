// Make the code refactoring using forEach method and arrow functions.

const logItems = items => {
  console.log(items);
  items.forEach((value, index) => console.log(`${index + 1} - ${value}`));
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);