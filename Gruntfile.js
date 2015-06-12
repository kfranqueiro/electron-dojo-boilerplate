module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-download-electron');
	grunt.loadNpmTasks('grunt-electron');

	var packageConfig = grunt.file.readJSON('package.json');

	grunt.initConfig({
		appName: 'Electron Dojo Boilerplate',
		appVersion: packageConfig.version,
		electronVersion: '0.28.0',

		'download-electron': {
			version: '<%= electronVersion %>',
			outputDir: 'electron'
		},

		electron: {
			// TODO: per-platform
			// TODO: icon
			release: {
				options: {
					name: '<%= appName %>',
					dir: 'src',
					out: 'dist',
					version: '<%= electronVersion %>',
					platform: 'darwin',
					arch: 'x64',
					asar: true
				}
			}
		},

		clean: {
			css: {
				src: [ 'src/resources/**/*.css' ]
			},
			electron: {
				src: [ 'electron' ]
			},
			release: {
				src: [ 'dist' ]
			}
		},

		stylus: {
			options: {
				compress: true,
				'resolve url': true
			},

			compile: {
				files: {
					'src/resources/main.css': 'src/resources/main.styl'
				}
			}
		},

		watch: {
			stylus: {
				files: [ 'src/resources/**/*.styl' ],
				tasks: [ 'stylus' ]
			}
		}
	});

	grunt.registerTask('default', [ 'stylus', 'watch' ]);
	grunt.registerTask('dev', [ 'download-electron', 'stylus' ]);
	grunt.registerTask('release', [ 'stylus', 'clean:release', 'electron' ]);
};
