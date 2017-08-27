

app.controller('mainCtrl', function($scope, $location, dataService){



    // permanent data-clone:
    $scope.items = dataService.data;

    { // console.log(localStorage);
      // console.log("Здесь будет вывод клона из сервиса: ");
      // $scope.msg = dataService.data;
      // console.log($scope.msg);
      // console.dirxml($scope.msg);
      // console.log("eof $scope.msg");
    }

    $scope.showProduct = (item) => {
      $scope.currentItem = item ? angular.copy(item) : {};
      $location.path("/product");
    };



    $scope.delete = (item) => {
      dataService.data.forEach(function(elem, index){
        if (elem.id === item.id) {
          dataService.data.splice(dataService.data.indexOf(elem), 1);
          dataService.updateStorage(dataService.data);
        }
      });
    };


    $scope.editOrCreate = (item) => {
      $scope.currentItem = item ? angular.copy(item) : {};
      $location.path("/edit");
    };

    $scope.push = () => {

    };

});





















//
