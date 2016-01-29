describe ("PizzaConstructor", function(){
  it("creates an object with a default price of for small pizza of 13, and 18 for a large", function(){
    var pizza = new PizzaConstructor;
    expect(pizza.smallPrice).to.equal(13);
    expect(pizza.largePrice).to.equal(18);
  });

  it("add a method 'meat' for the object that adds 2 to smallPrice and 3 to largePrice, and stores meat toppings in an array for the object property 'meatToppings'", function(){
    var test = new PizzaConstructor;
    test.meat("pepperoni");
    expect(test.smallPrice).to.equal(15);
    expect(test.largePrice).to.equal(21);
    expect(test.meatToppings).to.eql(["pepperoni"]);
  });
  it("add a method 'vegetables' for the object that adds 1 to smallPrice and 2 to largePrice, and stores meat toppings in an array for the object property 'vegetableToppings'", function(){
    var test = new PizzaConstructor;
    test.meat();
    test.vegetables("onion");
    expect(test.smallPrice).to.equal(16);
    expect(test.largePrice).to.equal(23);
    expect(test.vegetableToppings).to.eql(["onion"]);
  });
});
