// editCtrl controller
app.controller("editCtrl", function($scope, $location, dataService){


    $scope.cancelEdit = () => $location.path("/");

    $scope.saveEdit = function(item){
      if (angular.isDefined(item.id)){
        $scope.update(item);
      } else {
        $scope.create(item);
      }
    }


    $scope.update = (item) => {
      dataService.data.forEach(function(elem, index){
      	if (elem.id === item.id){
      		dataService.data.splice(index, 1, item);
      		// ^^ выбыраем место для работы, сколько удаляем, и тыкаем туда новый объект,
      		//который мы уже сами и сможем править.
      		// обновляем LS:
      		dataService.updateStorage(dataService.data);
      	}
      });
      $location.path("/");
    };


    $scope.create = function(item){
      const newId = 0;
      dataService.data.forEach(function(elem, index){
        if (newId < elem.id) {
          newId = elem.id;
        }
      });
      item.id = ++newId;

      dataService.data.push(item);
      dataService.updateStorage(dataService.data);
      $location.path("/");
    }





    // что вызывается на change для input-a. доставет из инпута.
    $scope.getImage = function (elem, callback) {
        var reader = new FileReader();
        if( scope.fileIsImage(elem.files[0].type) ){
            reader.onload = callback;
            reader.readAsDataURL(elem.files[0]); // только здесь запустится ридер файла.
        }
        else {
            angular.element(elem).val(null);
        }
    };

    $scope.fileIsImage = function (file) {
        var types = [ 'image/png', 'image/jpeg'/*, 'image/gif', 'image/bmp', 'image/webp', 'image/svg+xml'*/ ];

        return types.some(function (type) {
            return file.indexOf(type) !== -1;
        })
    };

    // это callback на файл ридере. коллбек вызывается, когда ридер переварит весь файл.
      // просто передаем результат
    $scope.imageIsLoaded = function (e) {
        scope.$apply(function () {
            scope.infoBlocks.basic.data.image = e.target.result;
        });
        angular.element(document.querySelector('#edit_avatar')).val(null);
    };

    // Валидацию для картинок. формат уже есть.


}); // EOF homeCtrl
