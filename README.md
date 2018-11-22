# GatoNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If your dev API server is running on localhost 8080 port, you can run `npm start -- --proxy-config src/proxy.localhost8080.conf.json`
If you want to run on `https://gato-api.herokuapp.com` instance instead, you can run `npm start -- --proxy-config src/proxy.heroku.conf.json`

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

## Deploy on Github Pages

Run `ng build --prod`, add `dist/gato-ng/config/environment.json` and then `npx firebase deploy`
