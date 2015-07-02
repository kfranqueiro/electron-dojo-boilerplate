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

`grunt release`

This will set up releases for all platforms possible under the `dist` directory.

Note that cross-OS limitations may apply.  In particular:

* Building for Windows targets with a custom icon requires wine on non-Windows OSes for rcedit
* Building for OS X is skipped on Windows due to dodgy symlink support

## License

[MIT](LICENSE)
