dinnerPlannerApp.controller('OverviewCtrl', function ($scope,Dinner) {

    $scope.dishes = Dinner.getSelectedDish();

    $scope.getNumberOfGuests = function() {
        return Dinner.getNumberOfGuests();
    }

    $scope.fixedNumber = function(num) {
        return Dinner.fixedNumber(num);
    }

    $scope.getTotalMenuPrice = function() {
        return Dinner.getTotalMenuPrice();
    }

    $scope.getDishPrice = function(data) {
        return Dinner.getDishPrice(data);
    }
});