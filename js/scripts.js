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
    newPizza.meat(meatTop);
    newPizza.vegetables(vegTop);
    debugger;
    $("#first-pizza").append("<h1>" + newPizza.size + "</h1><ul" + " " + "id='first-pizzaTop'></ul>");
    $("ul#first-pizzaTop").append("<li>" + newPizza.meatToppings + "</li>");
    $("ul#first-pizzaTop").append("<li>" + newPizza.vegetableToppings + "</li>");

  });
});

// $("#add-meat").click(function(){
// //   $("#moreMeat").append('<div class="form-group"><label for="meatTop">Meat Toppings</label><select class="form-control meatTop"><option value="pepperoni">Pepperoni</option><option value="sausage">Sausage</option><option value="bacon">Bacon</option><option value="salami">Salami</option></select></div>')
// // })
