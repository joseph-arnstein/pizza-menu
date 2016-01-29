function PizzaConstructor(){
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

// $(document).ready(function() {
//
// });
