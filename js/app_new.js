$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var indexView = new IndexView($("#indexView"),model);
	var selectDishView = new SelectDishView($("#selectDishView"),model);
	var dishView = new DishView($("#dishView"),model);
	var selectedDishView = new SelectedDishView($("#selectedDishView"),model);
	var dinnerPreparationView = new DinnerPreparationView($("#dinnerPreparationView"),model);
	var dinnerOverView= new DinnerOverView($("#dinnerOverView"),model);
});