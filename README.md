# Swiftpedia

![Swift Logo](static/img/apple-touch-icon.png)

## Overview

Swiftpedia is a local knowledge base for creating [Swift](https://www.swift.org/) programming language based applications. The wiki includes code snippets that document the latest [Swift UI](https://developer.apple.com/swiftui) based user interface controls.

Swift is a modern language that is easy to learn. It provides a way to use the macOS and iOS operating systems native UI controls so your apps are visually pleasing. Swift developers also get low-level access to the macOS native APIs with low overhead.

Swift is a great choice for a programming language to use for software development if you create software targeted at the Apple macOS, iOS, and visionOS hardware platforms. 

## Editing the Wiki

During the development stage, you need to install [NodeJS](https://nodejs.org/en) to compile and view the [Docusaurus](https://docusaurus.io/docs/installation) formatted markdown content.

Add [NodeJS](https://nodejs.org/en) to your system. Make sure you have the "npm" utility added to your PATH environment variable so you can run this CLI tool from the terminal.

Use a git client like [GitKraken](https://www.gitkraken.com/download) or [GitHub Desktop](https://desktop.github.com/download/) to download a local copy of the git repo:  

[https://github.com/Lightfielder/Swiftpedia/](https://github.com/Lightfielder/Swiftpedia/)

> Note: The repo is set to a private visibility state during the development stage.

In a new terminal window, navigate to the location where you downloaded the Swiftpedia git repo content. Then run the `npm start` command to launch the local staging server. Example CLI Syntax:

```bash
cd $HOME/Documents/Git/Swiftpedia/
npm install
npm start
```

![npm start](static/img/npm_start.png)

If the NodeJS server activates without issue, you should be able to view the content live at the following localhost address in your default web-browser:

[http://localhost:3000/Swiftpedia/](http://localhost:3000/Swiftpedia/)   


![Web Browser View](static/img/website.png)


