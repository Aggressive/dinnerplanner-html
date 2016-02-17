//ExampleView Object constructor
var ExampleView = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var model = new DinnerModel();
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	model.setNumberOfGuests(6);
	this.numberOfGuests.html(model.getNumberOfGuests());
	//console.log(model.getSelectedDish('starter'));
	model.addDishToMenu(2);
	model.addDishToMenu(3);
	console.log(model.getFullMenu());
	console.log(model.getAllIngredients());
	console.log(model.getTotalMenuPrice());
}
 
