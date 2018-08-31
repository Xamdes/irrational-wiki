# Irrational Wiki

## Author

  * Steven Colburn

## Created

8/17/2018  

## Task List

  [x] Can interface with firebase  
  [x] Can read files from database  
  [x] Create Article
  [x] Read Article
  [] Update Article
  [] Destroy Article
  [x] Routing works  
    * Route will be based on title of article  

## Instructions

  * Clone project from https://github.com/Xamdes/irrational-wiki.git
  * Go to firebase
  * Create a Realtime Database
    * Database should be named "irrational-wiki"
  * Upload JSON file from irrational-wiki/samples/articles.json
  * Create an api-keys.ts file in irrational-wiki/src/app/
      > export const masterFirebaseConfig = {  
      > apiKey: "xxxx",  
      > authDomain: "xxxx",  
      > databaseURL: "xxxx",  
      > projectId: "xxxx",  
      > storageBucket: "xxxx",  
      > messagingSenderId: "xxxx"  
      > };  
  * Run Project using npm install; ng serve --open

## Specs

  * Website will be based on the RationalWiki at https://rationalwiki.org/wiki/Main_Page
  * Build main page structure
  * Random Featured Article
  * About the purpose for the wiki
  * Links for participating in the creation and updating of articles
  * Feature Content Section
  * Portals and Articles Section
    * Separated content based on an overall theme
  * Routing between different articles
    * route based on article title
  * Database to store and retrieve articles
  * Add images for articles
    * **Maybe**

  * Component List
    * Display-Article

  * Model List
    * Article

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Add `--open` for your browser to automatically

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
Or `ng g component component-name`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## MIT License

Copyright (c) 2018 Steven Colburn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
