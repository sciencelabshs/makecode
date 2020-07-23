# BuildBee MakeCode Editor - 3D printing with block coding
Try it: https://buildbee.github.io/makecode

The team at BuildBee is trialing out Microsoft MakeCode to let you use block coding and javascript to make your own 3d designs.  Based on an OpenJSCad implementation, the editor allows you to create shapes that can be sent to your 3D printer. 

Project status: super experimental!


# About BuildBee 
BuildBee is 3D printing software that makes managing the workflow of 3D printing much simpler.  The BuildBee Desktop app (Mac/Win) connects to most 3D printers and guides you step by step through the printing process, offering taylored presets for different kinds of prints. Currently used widely across the Australian school system, it is used to manage queuing, groups and printing permissions for schools and universities. 

For more information, check out 
https://buildbee.com/

# About PXTs

This repo contains an editor built with [Microsoft MakeCode (PXT)](https://github.com/Microsoft/pxt). The editor is hosted on the GitHub pages at [http://microsoft.github.io/pxt-sample/](http://microsoft.github.io/pxt-sample/)

[![Build Status](https://travis-ci.org/Microsoft/pxt-sample.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-sample)
[![Community Discord](https://img.shields.io/discord/448979533891371018.svg)](https://aka.ms/makecodecommunity)



## Running locally

These instructions allow to run locally to modify the sample.

### Setup

The following commands are a 1-time setup after synching the repo on your machine.

* install [node.js](https://nodejs.org/en/)

* install the PXT command line
```
npm install -g pxt
```
* install the dependencies
```
npm install
```

### Running the local server

After you're done, simple run this command to open a local web server:
```
pxt serve
```

After making a change in the source, refresh the page in the browser.

## Updating the tools

If you would like to pick up the latest PXT build, simply run
```
pxt update
```


## deploying

```
pxt staticpkg --gh --bump
``

More instructions at https://github.com/Microsoft/pxt#running-a-target-from-localhost 
