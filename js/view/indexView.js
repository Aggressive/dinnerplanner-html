var IndexView = function (container,model) {

	/*The update method has an object as the parameters. 
	 The object is the argument you optionally passed in your notifyObservers method (see step 1). 
	 Based on this your view now knows it needs to update, so in the update method you need to 
	 get the new values from the model and update the components that show the model data.
	 */
	this.update = function (obj) {
		
	}

	this.createButton = $('#createButton');

	model.addObserver(this);
}