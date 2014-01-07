module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngconstant: {
      dist: {
        dest: 'public/app/config.js',
        name: 'config',
        constants: {
          ENV_CONFIG: grunt.file.readJSON('config/config.json')
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.registerTask('default', ['ngconstant']);

};