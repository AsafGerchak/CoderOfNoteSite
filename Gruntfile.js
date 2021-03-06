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
   		files: ['index.html','portfolioPages/*.html'],
   		tasks: ['']
   	},
   	options: {
   		livereload: true
   	}
   },

   sass: {
   	dist: {
   		files: {
   			'css/style.css' : 'css/style.scss',
            'css/mq.css' : 'css/mq.scss'
   		}
   	}
   },

   autoprefixer: {
   	options: {
   		browsers: ['last 5 version', 'ie 8', 'ie 9']
   	},
   	no_dest: {
   		src: 'css/style.css',
         src: 'css/mq.css'
   	}
   },

   connect: {
   	server: {
   		options: {
   			port: '8000',
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
   			'css/mini.css' : 'css/style.css',
            'css/mqMini.css' : 'css/mq.css'
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
 grunt.registerTask('default', ['sass','autoprefixer','recess','connect','watch']);
};