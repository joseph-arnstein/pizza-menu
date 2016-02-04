describe ("PizzaConstructor", function(){
  it("creates an object with a default price of for small pizza of 13", function(){
    var pizza = new PizzaConstructor;
    expect(pizza.price).to.equal(13);
  });

  it("add a method 'upgradeLarge' for the object that adds 5 to price and change the property 'size' to equal 'large'", function(){
    var pizza = new PizzaConstructor;
    pizza.upgradeLarge();
    expect(pizza.price).to.equal(18);
    expect(pizza.size).to.equal("large");
  });

  it("add a method 'meat' for the object that adds 2 to price, and stores meat toppings in an array for the object property 'toppings'", function(){
    var pizza = new PizzaConstructor;
    pizza.meat("pepperoni");
    expect(pizza.price).to.equal(15);
    expect(pizza.toppings).to.eql(["pepperoni"]);
  });

  it("add a method 'vegetables' for the object that adds 1 to price, and stores meat toppings in an array for the object property 'toppings'", function(){
    var pizza = new PizzaConstructor;
    pizza.vegetables("onion");
    expect(pizza.price).to.equal(14);
    expect(pizza.toppings).to.eql(["onion"]);
  });
});

describe("OrderTotal", function(){
  it("will add pizzas as objects into an array", function(){
    var pizza = new PizzaConstructor;
    var pizza2 = new PizzaConstructor;
    var order = new OrderTotal;
    order.addPizza(pizza);
    order.addPizza(pizza2);
    expect(order.pizzas).to.eql([pizza, pizza2]);
  });
  it("will return total order price", function(){
    var test1 = new PizzaConstructor;
    test1.meat("pepperoni");
    var test2 = new PizzaConstructor;
    var order = new OrderTotal;
    order.addPizza(test1);
    order.addPizza(test2);
    order.getTotal();
    expect(order.totalPrice).to.equal(28);
  });
});
