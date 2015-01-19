'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); //引用所有模块
  require('time-grunt')(grunt);

  //grunt config
  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      files: ['js/**/*.js']
    },
    cssmin: {},
    concat: {},
    uglify: {},
    watch: {}
  });

  grunt.registerTask('build', [
    // 'clean:dist',
    // 'autoprefixer',
    // 'copy:dist',
    // 'cssmin',
    'uglify'
  ]);

  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('check', ['jshint']);
};
