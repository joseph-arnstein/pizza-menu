function PizzaConstructor(){
  this.smallPrice = 13;
  this.largePrice = 18;
  this.meatToppings = [];
}

PizzaConstructor.prototype.meat = function(meat) {
  this.smallPrice+= 1;
  this.largePrice += 2;
  this.meatToppings.push(meat);
}

// $(document).ready(function() {
//
// });
