# Electron Dojo Boilerplate

This repository provides a starting/reference point for Electron-based applications using the Dojo toolkit
and the Stylus CSS preprocessor.

## Setup

1. Clone this repository into a directory of your choice
1. `rm -rf .git` and `git init` to nuke this repo's history
1. Update `name` in `package.json` and `bower.json`, and otherwise tweak as desired
1. `npm install`
1. `bower install`
1. Replace "Electron Dojo Boilerplate" in `Gruntfile.js` and `src/browser/main.js`
1. Update or replace `LICENSE` as desired
1. Optionally replace `icon.ico` and `icon.icns` with your own icon, or delete them and remove `icon` from
	the `electron-packager` task configuration in `Gruntfile.js`

## Usage

### Development

1. `grunt dev`
1. `bin/run`

### Release

`grunt release`

This will set up releases for OS X, Linux, and Windows under the `dist` directory.  (Target platforms
can be customized via the `arch` and `platform` properties in the `electron-packager` task configuration.)

Note that cross-OS limitations may apply.  In particular:

* Building for Windows targets with a custom icon requires wine on non-Windows OSes for rcedit
* Building for OS X is skipped on Windows due to dodgy symlink support

## License

[MIT](LICENSE)
