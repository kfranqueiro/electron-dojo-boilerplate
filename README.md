# Electron Dojo Boilerplate

This repository provides a starting/reference point for Electron-based applications using the Dojo toolkit
and the Stylus CSS preprocessor.

## Setup

1. Tweak `package.json` and `bower.json` as desired,
	and replace "Electron Dojo Boilerplate" in `Gruntfile.js` and `src/browser/main.js`
1. `npm install`
1. `bower install`

## Usage

### Development

1. `grunt dev`
1. `bin/run`

### Release

Run one of the following:

* `grunt release-linux`
* `grunt release-mac`
* `grunt release-win`
* `grunt release-all` to build all three

The application will be deployed under the `dist` directory.

Note that there may be limitations within [electron-packager](https://github.com/maxogden/electron-packager)
on which OS releases can be built on which host OS.  (For example, building for Windows with a custom icon requires
wine on non-Windows OSes for rcedit.)

## License

[MIT](LICENSE)
