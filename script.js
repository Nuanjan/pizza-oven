function pizzaOven(
  crustType = "",
  sauceType = "",
  cheeses = [],
  toppings = []
) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;

  return pizza;
}

var deepPizza = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);

var customPizza = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);

var hawailianPizza = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella"],
  ["ham", "pineapple", "onions"]
);

var veggiePizza = pizzaOven(
  "crunchy",
  "tomato",
  ["mozzarella", "cheddar"],
  ["broccoli", "mushroom", "onions", "pepper"]
);

var pizzaArray = [customPizza, deepPizza, hawailianPizza, veggiePizza];

// Bonus point

function randomPizza(pizzaArray) {
  var randomIndex = Math.floor(Math.random() * pizzaArray.length);
  return pizzaArray[randomIndex];
}

var myRandomPizza = randomPizza(pizzaArray);
console.log("my random pizza is: ", myRandomPizza);
