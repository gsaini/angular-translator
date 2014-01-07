var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider', function($translateProvider) {
  /*$translateProvider.translations('en', {
    HEADLINE: 'Hello there, This is my awesome app!',
    INTRO_TEXT: 'And it has i18n support!'
  })
  .translations('de', {
    HEADLINE: 'Hey, das ist meine großartige App!',
    INTRO_TEXT: 'Und sie untersützt mehrere Sprachen!'
  });
*/
  	$translateProvider.preferredLanguage('hi');
    $translateProvider.useStaticFilesLoader({
  	  prefix: 'languages/',
  	  suffix: '.json'
  	});
}]);