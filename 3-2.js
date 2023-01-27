const groceryStore = [];

const item1 = {
  name: "apple",
  model: "granny smith",
  cost: 10,
  quantity: 35
};

const item2 = {
  name: "bread",
  model: "whole wheat",
  cost: 18,
  quantity: 22
};

const item3 = {
  name: "cookies",
  model: "chocolate chips",
  cost: 14,
  quantity: 15
};

groceryStore.push(item1, item2, item3);
console.log(groceryStore);
console.log(groceryStore[2].quantity);
