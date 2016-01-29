var numberOfPizzas = 0

function PizzaConstructor(){
  this.size = "";
  this.smallPrice = 13;
  this.largePrice = 18;
  this.meatToppings = [];
  this.vegetableToppings = [];
};

PizzaConstructor.prototype.meat = function(meat) {
  this.smallPrice += 2;
  this.largePrice += 3;
  this.meatToppings.push(meat);
};
//PizzaConstructor.prototype.meat = function(meat) {
//   var meats = [meat];
//   meats.forEach(function(food) {
//     this.smallPrice += 2;
//     this.largePrice += 3;
//     this.meatToppings.push(meats);
//   });
// };

PizzaConstructor.prototype.vegetables = function (veg) {
  this.smallPrice += 1;
  this.largePrice += 2;
  this.vegetableToppings.push(veg);
};

$(document).ready(function() {
  $("#blanks form").submit(function(event){
    event.preventDefault();
    var newPizza = new PizzaConstructor;
    newPizza.size = $("select.size").val();
    var meatTop = $("select.meatTop").val();
    var vegTop = $("select.vegTop").val();
    numberOfPizzas ++;
    if (meatTop !== "none") {
      newPizza.meat(meatTop);
    };
    if (vegTop !== "none") {
      newPizza.vegetables(vegTop);
    };
    debugger;

// Create and display unordered list for pizzas & properties //


    if (numberOfPizzas === 1){
      $("#first-pizza").append("<h3>One " + newPizza.size + " pizza</h3><ul" + " " + "id='first-pizzaTop'></ul>");
      if (meatTop !== "none") {
        $("ul#first-pizzaTop").append("<li>" + newPizza.meatToppings + "</li>");
      }
      if (vegTop !== "none"){
        $("ul#first-pizzaTop").append("<li>" + newPizza.vegetableToppings + "</li>");
      }
      if (newPizza.size === "small") {
        $("ul#first-pizzaTop").append("<li>$" + newPizza.smallPrice + "</li>")
      } else {
        $("ul#first-pizzaTop").append("<li>$" + newPizza.largePrice + "</li>")
      }
    } else if (numberOfPizzas === 2) {
      $("#second-pizza").append("<h3>One " + newPizza.size + " pizza</h3><ul" + " " + "id='second-pizzaTop'></ul>");
      if (meatTop !== "none"){
        $("ul#second-pizzaTop").append("<li>" + newPizza.meatToppings + "</li>");
      }
      if (vegTop !== "none"){
        $("ul#second-pizzaTop").append("<li>" + newPizza.vegetableToppings + "</li>");
      }
      if (newPizza.size === "small") {
        $("ul#second-pizzaTop").append("<li>$" + newPizza.smallPrice + "</li>")
      } else {
        $("ul#second-pizzaTop").append("<li>$" + newPizza.largePrice + "</li>")
      }
    }  else if (numberOfPizzas === 3) {
      $("#third-pizza").append("<h3>One " + newPizza.size + " pizza</h3><ul" + " " + "id='third-pizzaTop'></ul>");
      if (meatTop !== "none"){
        $("ul#third-pizzaTop").append("<li>" + newPizza.meatToppings + "</li>");
      }
      if (vegTop !== "none"){
        $("ul#third-pizzaTop").append("<li>" + newPizza.vegetableToppings + "</li>");
      }
      if (newPizza.size === "small") {
        $("ul#third-pizzaTop").append("<li>$" + newPizza.smallPrice + "</li>")
      } else {
        $("ul#third-pizzaTop").append("<li>$" + newPizza.largePrice + "</li>")
      }
    } else {
      alert("Enough already")
    }
  });
});

// $("#add-meat").click(function(){
// //   $("#moreMeat").append('<div class="form-group"><label for="meatTop">Meat Toppings</label><select class="form-control meatTop"><option value="pepperoni">Pepperoni</option><option value="sausage">Sausage</option><option value="bacon">Bacon</option><option value="salami">Salami</option></select></div>')
// // })
