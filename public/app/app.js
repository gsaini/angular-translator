var app = angular.module('myApp', ['pascalprecht.translate', 'config']);

app.config(['$translateProvider', 'ENV_CONFIG', function($translateProvider, config) {
  /*$translateProvider.translations('en', {
    HEADLINE: 'Hello there, This is my awesome app!',
    INTRO_TEXT: 'And it has i18n support!'
  })
  .translations('de', {
    HEADLINE: 'Hey, das ist meine großartige App!',
    INTRO_TEXT: 'Und sie untersützt mehrere Sprachen!'
  });
*/
  	$translateProvider.preferredLanguage(config.Language);
    $translateProvider.useStaticFilesLoader({
  	  prefix: 'languages/',
  	  suffix: '.json'
  	});
}]);