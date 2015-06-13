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
			// TODO: icon
			options: {
				name: '<%= appName %>',
				dir: 'src',
				out: 'dist',
				version: '<%= electronVersion %>',
				arch: 'x64',
				asar: true
			},

			linux: {
				options: {
					// For some reason electron-packager doesn't create a subdirectory for linux...
					out: 'dist/<%= appName %>-linux',
					platform: 'linux'
				}
			},

			mac: {
				options: { platform: 'darwin' }
			},

			win: {
				options: { platform: 'win32' }
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

	var commonReleaseTasks = [ 'stylus', 'clean:release' ];

	grunt.registerTask('release-linux', commonReleaseTasks.concat('electron:linux'));
	grunt.registerTask('release-mac', commonReleaseTasks.concat('electron:mac'));
	grunt.registerTask('release-win', commonReleaseTasks.concat('electron:win'));
	grunt.registerTask('release-all', commonReleaseTasks.concat('electron'));
};
