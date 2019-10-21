# CorsoCustomThemeBuild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


ng new corso-custom-theme-build --prefix=cc --routing=false --style=scss 
npm install --save @angular/material @angular/cdk @angular/animations
https://v7.material.angular.io/guide/getting-started
-Specifically update app.module.ts styles.scss and main.ts 

ng generate module matio
npm uninstall @angular/cdk
npm uninstall @angular/material
npm install --save @angular/material@7.3.7
npm install --save @angular/cdk@7.3.7
npm install --save @angular/animations@7.2.15

git remote add origin https://github.com/papadicorso/corso-custom-theme-build.git

git push -u origin master


ng generate component /components/card-one --module=app --dryRun=false
ng generate component /components/card-two --module=app --dryRun=false
ng generate component /components/card-two --module=app --dryRun=false

https://coryrylan.com/blog/analyzing-bundle-size-with-the-angular-cli-and-webpack

npm install --save-dev webpack-bundle-analyzer
#Add this to the package.json - "scripts" section at the top
package.json: "bundle-report": "webpack-bundle-analyzer dist/stats.json"

# Command to run is npm run bundle-report

## Uninstall existing global angular cli and install latest
npm uninstall -g angular-cli
npm cache clean or npm cache verify #(if npm > 5)
npm install -g @angular/cli@latest


ng update @angular/cli @angular/core
ng update @angular/material

# Also must re-install npm install --save-dev webpack-bundle-analyzer and update reference to stats.json

"bundle-report": "webpack-bundle-analyzer dist/corso-custom-theme-build/stats-es2015.json"