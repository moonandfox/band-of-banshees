
module.exports = function(grunt) {

  process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  // dotenv for loading environment variables
  var dotenv = require('dotenv');
  dotenv.load();

  console.log('Loading ' + process.env.NODE_ENV + ' environment (' + process.env.AUTH + ')');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ftpush');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // grunt-contrib-copy
    // https://github.com/gruntjs/grunt-contrib-copy
    copy: {
      images: {
        files: [{
          flatten: true,
          expand: true,
          src: ['web_files/images/**'],
          dest: 'images/'
        }]
      },
      fonts: {
        files: [{
          flatten: true,
          expand: true,
          src: ['web_files/fonts/**'],
          dest: 'fonts/'
        }]
      }
    },
    // grunt-contrib-sass
    // https://github.com/gruntjs/grunt-contrib-sass
    sass: {
      dist: {
        files: {
          '.build/styles.css': 'web_files/styles/styles.scss'
        }
      }
    },
    // grunt-autoprefixer
    // https://github.com/nDmitry/grunt-autoprefixer
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      files: {
        expand: true,
        flatten: true,
        src: ['.build/*.css'],
        dest: 'web_files/styles'
      }
    },
    // grunt-ftp-push
    // https://www.npmjs.org/package/grunt-ftp-push
    ftpush: {
      build: {
        auth: {
          host: 'ftp.s399373597.onlinehome.us',
          port: 21,
          authKey: process.env.AUTH
        },
        src: 'web_files',
        dest: '/',
        keep: ['/logs']
      }
    },
    // grunt-contrib-watch
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      options: {
        livereload: true,
      },
      images: {
        files: ['web_files/images/**/*'],
        tasks: ['copy:images']
      },
      fonts: {
        files: ['web_files/fonts/*'],
        tasks: ['copy:fonts']
      },
      sass: {
        files: ['web_files/**/*.scss'],
        tasks: ['css'],
      },
      ftp: {
        files: ['web_files/*.html', 'web_files/*.php', 'web_files/styles/*.css', 'web_files/images/*.*', 'web_files/javascript/*'],
        tasks: ['ftpush'],
      }
    }
  });

  grunt.registerTask('css', 'Build CSS files', ['sass', 'autoprefixer'])


  // grunt (default)
  grunt.registerTask('default', 'Watch files and upload changes to FTP', ['watch']);
}

