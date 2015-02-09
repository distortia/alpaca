module.exports = function(grunt){

	//configure tasks
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		uglify : {
			build: {
				src: 'src/js/*.js',
				dest: 'js/script.min.js'
			},
			dev: {
				options: {
				beautify: true,
				mangle: false,
				compress: false,
				preserveComments: 'all'
			},
			src: 'src/js/*.js',
			dest: 'js/script.min.js'
			}
		},

		sass: {
			dev: {
				options: {
					style: 'expanded',
					sourcemap: 'none'
				},
				files: {
					'./css/style.css' : 'src/sass/application.scss'
				}
			},
			build: {
				options:{
					style: 'compressed',
					sourcemap: 'none'
				},
				files: {
					'./css/style.css' : 'src/sass/application.scss'
				}
			}
		},
		jshint : {
			all: ['src/js/script.js', './gruntfile.js']
		},

		watch : {
			js: {
				files: ['src/js/*.js'],
				tasks: ['uglify:dev','jshint:all']
			},
			css: {
				files: ['src/sass/**/*.scss'],
				tasks: ['sass:dev']
			},
		}


	});

	//load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	//register tasks
	grunt.registerTask('default', ['uglify:dev','sass:dev']);

	grunt.registerTask('build', ['uglify:build', 'sass:build']);
}