# Cypress Login Tests – Sauce Demo

Automated login tests for [Sauce Demo](https://www.saucedemo.com), written with Cypress. I'm a QA tester moving from manual testing into automation, and this is my first Cypress project.

## What's tested

| # | Test case | Type |
|---|-----------|------|
| 1 | Log in with a valid user | Positive |
| 2 | Log out successfully | Positive |
| 3 | Incorrect password shows an error | Negative |
| 4 | Empty password shows an error | Negative |
| 5 | Empty username shows an error | Negative |

## Tools

- Cypress
- JavaScript
- Node.js
- VS Code

## How to run

1. Install [Node.js](https://nodejs.org).
2. Clone the repo and install dependencies:

```
git clone https://github.com/Haineki-ken/Cypress-Login-Sample.git
cd Cypress-Login-Sample
npm install
```

3. Open the Cypress test runner:

```
npx cypress open
```

4. Choose **E2E Testing**, pick a browser, and click `Login.cy.js`.

To run all tests without opening a browser window:

```
npx cypress run
```

## What I practiced

- Writing test suites with `describe` and `it`
- Using `beforeEach` for test preconditions
- Locating elements with `cy.get()`
- Writing assertions with `.should()`
- Positive and negative test cases