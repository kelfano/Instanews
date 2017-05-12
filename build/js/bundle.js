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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/***/ (function(module, exports) {

$(function(){


    $('.loader').hide()

    $('#section').change(function(){

      var topStoryItems = '';
      var homeSection = $('#section option').filter(':selected').val();  
      var url = 'https://api.nytimes.com/svc/topstories/v2/' + homeSection+ '.json'; 
          url += '?' + $.param({
          'api-key': '68f6f7797d58429bad830b72c33c7025'
        });
      
        $('.loader').show();
        $('.site-header').addClass('moveToTop');
        $('.nyt-logo').addClass('nyt-logo-small');

          $.ajax({
            url: url,
            method: 'GET',
          }).done(function(data) {

            $('.loader').hide()

            var newYorkTimes = data.results;
            var filteredList  = newYorkTimes.filter(function(item){return item.multimedia.length}).slice(0,12);

              
          $.each(filteredList, function(index,value){
              topStoryItems += '<li class="article-list">';
              topStoryItems += '<a href="' + value.url + '">'; 
              topStoryItems += '<div class="innerStoryItems" style="background-image:url(' + value.multimedia[4].url + ')" >';
              topStoryItems += '<p class="textbox">' + value.abstract + '</p> </div> </a>';
              topStoryItems += '</li>';  
          });


              $('.top-story').empty();
              $('.top-story').append(topStoryItems);
                
              }).fail(function() {
                $('.top-story').append('Sorry, please try again!');
                
              }). always(function(){
                $('.loader').hide();
              });

          
      });

  });


/***/ })
/******/ ]);