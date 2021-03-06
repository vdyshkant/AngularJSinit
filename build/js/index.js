/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_home_controller_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_home_controller_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__controllers_home_controller_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_main_controller_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_main_controller_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__controllers_main_controller_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_edit_controller_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_edit_controller_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__controllers_edit_controller_js__);
// import "./index.scss";
// import scssStyles from './index.scss'
// require('./style.css');

// import createMenu from './menu';
// var menu = createMenu(['Главная', 'Обо мне'], 'menu');
// document.body.appendChild(menu);

console.log('in index.js');









/***/ }),
/* 1 */
/***/ (function(module, exports) {


const app = angular.module('storeApp', ['ngRoute','ngStorage']);


//////////
// routing config
//////

app.config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when("/", {
    templateUrl: "views/table.html"
  });

  $routeProvider.when("/edit", {
    templateUrl: "views/edit.html"
  });

  $routeProvider.when("/product", {
    templateUrl: "views/product.html"
  });

  $routeProvider.otherwise({
    templateUrl: "views/table.html"
  });
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {



app.factory("dataService", function(){

  //   логика на первую итерацию:
  // 1. чекаем сервисом и достаем из глобальлного обхекта/ 48 мин.
  const initData = {
    products: [
        {
          id: 0,
          name: "Item 1 --name",
          price: 21,
          description: "desc__LOUNGE 10 BLACK7",
          image: "data:image/png;base64,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"
        },
        {
          id: 1,
          name: "Item 2 --name",
          price: 23,
          description: "desc__LOUNGE 12 BLACK7",
          image: "data:image/png;base64,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"
        },
        {
          id: 2,
          name: "Item 3 --name",
          price: 25,
          description: "desc__LOUNGE 13 BLACK7",
          image: "data:image/png;base64,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"
        }
    ]
  }; // eof const data.
  const lsLen = localStorage.length;
  // console.log(lsLen);
  let dataBase;

  if (lsLen > 0){ // if LS has any data.

      {
        // for (let i = 0; i < $scope.lsLen; i++){ // проходимся по записям LS, ищем данные нашего приложения.
        //   let key = localStorage.key(i);

        //   if(key.indexOf("products") === 0){ // находим нужную нам запись в LS и работаем дальше с ней
        //     // Клонируем БД из LS в переменную:
        //     data = JSON.parse(localStorage.getItem(key)); //
        //   } // EOF находим нужную нам запись в LS
        // } // EOF проходка по записям LS
      } // eof commented

      if (localStorage.getItem("products") !== null){
        dataBase = JSON.parse(localStorage.getItem("products"));
      }
  } else { // EOF if LS has any data.
      // Если нужной записи нет, нам нужно взять данные из локальной базы:
      dataBase = initData.products;
      // забросить в LS (пока НЕ методом):
      localStorage.setItem('products', JSON.stringify(dataBase));
  }

  return {
    data: dataBase,

    // writing data to LocalStorage:
    updateStorage (obj){
      localStorage.setItem('products', JSON.stringify(obj));
      return false;
    },

    // getting data from LocalStorage:
    getData (){
      return JSON.parse(localStorage.getItem('products'))
    },
    sayHello (text){
      return "Factory says \"Hello " + text + "\"";
    },
  };


}); // EOF factory

  // adding item to storage:
  // let addToStorage = function(){
  //   $scope.appData = $scope.getData() || {};
  // };




  // end of all


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// homeCtrl controller
app.controller("homeCtrl", function($scope, $location){

    //////////
    // routing
    //////

    $scope.goToEdit = function(){
      $location.path("/edit");
    }

    $scope.goToProduct = function(){
      $location.path("/product");
    }

    $scope.goToTable = function(){
      $location.path("/");
    }

    // EOF routing




});


/***/ }),
/* 4 */
/***/ (function(module, exports) {



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


/***/ }),
/* 5 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);