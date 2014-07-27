module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),

   watch: {
   	css: {
   		files: 'css/*.scss',
   		tasks: ['sass', 'autoprefixer', 'recess']
   	},
   	html: {
   		files: 'index.html',
   		tasks: ['']
   	},
   	options: {
   		livereload: true
   	}
   },

   sass: {
   	dist: {
   		files: {
   			'css/style.css' : 'css/style.scss'
   		}
   	}
   },

   autoprefixer: {
   	options: {
   		browsers: ['last 5 version', 'ie 8', 'ie 9']
   	},
   	no_dest: {
   		src: 'css/style.css'
   	}
   },

   connect: {
   	server: {
   		options: {
   			port: 8000,
   			base: ''
   		}
   	}
   },

   recess: {
   	dist: {
   		options: {
   			compile: false,
   			compress: true
   		},
   		files: {
   			'css/mini.css' : 'css/style.css'
   		}
   	}
   }

 });

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-recess');

 // Default task(s).
 grunt.registerTask('default', ['connect','watch']);
};