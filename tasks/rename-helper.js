// This task renames the Electron Helper applications for Mac releases,
// since electron-packager doesn't.

var fs = require('fs');
var path = require('path');

module.exports = function (grunt) {
	grunt.registerTask('rename-electron-helper', 'Renames the Electron Helper app.', function () {
		this.requiresConfig(this.name + '.options.name');
		this.requiresConfig(this.name + '.options.dir');

		var config = this.options();
		var originalName = 'Electron';
		var baseDir = config.dir;

		grunt.file.expand({
			cwd: baseDir
		}, [
			'**/MacOS/Electron Helper*',
			'**/Electron Helper*.app'
		]).forEach(function (filename) {
			var destination = path.join(path.dirname(filename),
				path.basename(filename).replace(originalName, config.name));
			fs.renameSync(path.resolve(baseDir, filename), path.resolve(baseDir, destination));
		});
	});
};
