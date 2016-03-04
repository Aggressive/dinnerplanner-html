// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

    $scope.numberOfGuests = Dinner.getNumberOfGuests();

    $scope.setNumberOfGuest = function(number){
        Dinner.setNumberOfGuests(number);
    }

    $scope.getNumberOfGuests = function() {
        return Dinner.getNumberOfGuests();
    }

    $scope.fixedNumber = function(num) {
        return Dinner.fixedNumber(num);
    }

    $scope.getCurrentDishPrice = function() {
        var dish = Dinner.getCurrentDish();
        if(dish) {
            return $scope.getDishPrice(dish);
        } else {
            return 0
        }
    }

    $scope.getDishPrice = function(data) {
        return Dinner.getDishPrice(data);
    }

    $scope.totalMenuCost = function() {
        return Dinner.getTotalMenuPrice()+$scope.getCurrentDishPrice();
    }

    $scope.removeDish = function(id) {
        Dinner.removeDishFromMenu(id);
    }

    $scope.chosenDishes = Dinner.getSelectedDish();

    //Dinner.DishSearch.get({title_kw:'chicken'})
    //Dinner.Dish.get({id:12345})

    // TODO in Lab 5: Implement the methods to get the dinner menu
    // add dish to menu and get total menu price

});