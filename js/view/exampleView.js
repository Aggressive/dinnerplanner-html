//ExampleView Object constructor
var ExampleView = function (container) {

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var model = new DinnerModel();

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.selectedDishes;

	model.setNumberOfGuests(6);
	this.numberOfGuests.html(model.getNumberOfGuests());
	/* Testdata
	console.log(model.getSelectedDish('starter'));
	model.addDishToMenu(2);
	model.addDishToMenu(3);
	console.log(model.getFullMenu());
	console.log(model.getAllIngredients());
	console.log(model.getTotalMenuPrice());
	*/

	model.addObserver(this)

	 /*The update method has an object as the parameters. 
	 The object is the argument you optionally passed in your notifyObservers method (see step 1). 
	 Based on this your view now knows it needs to update, so in the update method you need to 
	 get the new values from the model and update the components that show the model data.
	 */
	this.update = function (obj) {
		if(obj === "setNumberOfGuests"){
			this.numberOfGuests = model.getNumberOfGuests();
		}
		else if(obj === "addDishToMenu" || obj = "removeDishFromMenu"){
			this.selectedDishes = getFullMenu();
		}
	}
	
}
 
