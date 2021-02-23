# MoneyTransfer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

## Set Up

Take the clone from url `https://github.com/rimple90/money-transfer.git`, switch to branch main.

Run `npm i` on root folder to download dependecies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

The app will automatically reload if you change any of the source files.

## Application Structure

Application has two components `make-transfer` and `view-transation` and root Component as App Component

Themes folder has been added to include components styling classes

## Project Assumptions-

To and From Account are disbaled with initial values and cannot be edited

Submit button will be disabled till a valid amount is entered

Accesibility tool tip provide on To and Amount Input Fields

No special characters or alpbhabets are allowed to type in the amout field

Icons in the panel heading (The arrow.png and briefcase.png) are having white background color

Amount field in the `Recent Transations` table will show values with `-` sign depending on the credit debit indicator values for each data
The Date field in the `Recent Transations` table will display date in MMM dd, yyyy format

Accesibility tool tip provide on Category Code Field

There is a language switch dropdown created and placed at the top left corner of the application, which will help change the language to showcase i18n feature, the dropdwon has two values EN(English) by default, and DE(German)

Accesibility tool tip provided on the language switch

The application has been made responsive for all devices.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng test --code-coverage=true` to generate test coverage report

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
