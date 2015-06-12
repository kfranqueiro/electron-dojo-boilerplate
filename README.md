# Electron Dojo Boilerplate

This repository provides a starting/reference point for Electron-based applications using the Dojo toolkit
and the Stylus CSS preprocessor.

**Disclaimer:** This repo is in somewhat rough shape at the moment.
I expect to work some more things out.  I also expect to get some things wrong, so feedback is welcome.

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

The application will be deployed into the `dist` directory.

Currently the release task is only set up for Mac OS X, but I expect to add tasks/options for Windows and Linux.
