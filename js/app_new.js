$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var indexView = new IndexView($("#index"),model);
	var selectDishView = new SelectDishView($("#selectDish"),model);
	//var dishView = new DishView($("#dishView"),model);
	//var selectedDishView = new SelectedDishView($("#selectedDishView"),model);
	//var dinnerPreparationView = new DinnerPreparationView($("#dinnerPreparationView"),model);
	//var dinnerOverView= new DinnerOverView($("#dinnerOverView"),model);

	var indexViewController = new IndexViewController(indexView,model);
	var selectDishViewController = new SelectDishViewController(selectDishView,model);

});