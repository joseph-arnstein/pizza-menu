function PizzaConstructor(){
  this.size = "small";
  this.price = 13;
  this.toppings = [];
};

PizzaConstructor.prototype.upgradeLarge = function() {
  this.price += 5;
  this.size = "large";
};

PizzaConstructor.prototype.meat = function(meat) {
  this.price += 2;
  this.toppings.push(meat);
};

PizzaConstructor.prototype.vegetables = function (veg) {
  this.price += 1;
  this.toppings.push(veg);
};


function OrderTotal(){
  this.pizzas = [];
  this.totalPrice = 0
}

OrderTotal.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza)
};

OrderTotal.prototype.getTotal = function(){
  var total = 0
  this.pizzas.forEach(function(pizza){
  total += pizza.price;
  });
  this.totalPrice = total;
};

$(document).ready(function() {
  $("#blanks form").submit(function(event){
    event.preventDefault();
    var newPizza = new PizzaConstructor;
    var size = $("select.size").val();
    var meatTop = $("select.meatTop").val();
    var vegTop = $("select.vegTop").val();

    if (size === "large"){newPizza.upgradeLarge();};
    if (meatTop !== "none") {newPizza.meat(meatTop);};
    if (vegTop !== "none") {newPizza.vegetables(vegTop);};

    var order = new OrderTotal;
    order.addPizza(newPizza);

    // display

    order.pizzas.forEach(function(pizza){
      $("#show").append(
        '<div class="col-sm-4">'+
          '<h3>'+pizza.size+'</h3>'+
            '<ul>'+
              '<li>'+pizza.toppings[0]+'</li>'+
              '<li>'+pizza.toppings[1]+'</li>'+
              '<li>$'+pizza.price+'</li>'+
            '</ul>'+
        '</div>'
      );
    });
    order.getTotal();
    var bigPrice = order.totalPrice;
    debugger;
    $(".total").text("$"+bigPrice);
  });
});


// Create and display unordered list for pizzas & properties //

    // if (numberOfPizzas === 1){
    //   $("#first-pizza").append("<h3>One " + newPizza.size + " pizza</h3><ul" + " " + "id='first-pizzaTop'></ul>");
    //   if (meatTop !== "none") {
    //     $("ul#first-pizzaTop").append("<li>" + newPizza.meatToppings + "</li>");
    //   }
    //   if (vegTop !== "none"){
    //     $("ul#first-pizzaTop").append("<li>" + newPizza.vegetableToppings + "</li>");
    //   }
    //   if (newPizza.size === "small") {
    //     $("ul#first-pizzaTop").append("<li>$" + newPizza.smallPrice + "</li>")
    //   } else {
    //     $("ul#first-pizzaTop").append("<li>$" + newPizza.largePrice + "</li>")
    //   }
    // } else if (numberOfPizzas === 2) {
    //   $("#second-pizza").append("<h3>One " + newPizza.size + " pizza</h3><ul" + " " + "id='second-pizzaTop'></ul>");
    //   if (meatTop !== "none"){
    //     $("ul#second-pizzaTop").append("<li>" + newPizza.meatToppings + "</li>");
    //   }
    //   if (vegTop !== "none"){
    //     $("ul#second-pizzaTop").append("<li>" + newPizza.vegetableToppings + "</li>");
    //   }
    //   if (newPizza.size === "small") {
    //     $("ul#second-pizzaTop").append("<li>$" + newPizza.smallPrice + "</li>")
    //   } else {
    //     $("ul#second-pizzaTop").append("<li>$" + newPizza.largePrice + "</li>")
    //   }
    // }  else if (numberOfPizzas === 3) {
    //   $("#third-pizza").append("<h3>One " + newPizza.size + " pizza</h3><ul" + " " + "id='third-pizzaTop'></ul>");
    //   if (meatTop !== "none"){
    //     $("ul#third-pizzaTop").append("<li>" + newPizza.meatToppings + "</li>");
    //   }
    //   if (vegTop !== "none"){
    //     $("ul#third-pizzaTop").append("<li>" + newPizza.vegetableToppings + "</li>");
    //   }
    //   if (newPizza.size === "small") {
    //     $("ul#third-pizzaTop").append("<li>$" + newPizza.smallPrice + "</li>")
    //   } else {
    //     $("ul#third-pizzaTop").append("<li>$" + newPizza.largePrice + "</li>")
    //   }
    // } else {
    //   alert("Enough already")
    // }
  //});
//});
//
// // $("#add-meat").click(function(){
// // //   $("#moreMeat").append('<div class="form-group"><label for="meatTop">Meat Toppings</label><select class="form-control meatTop"><option value="pepperoni">Pepperoni</option><option value="sausage">Sausage</option><option value="bacon">Bacon</option><option value="salami">Salami</option></select></div>')
// // // })
