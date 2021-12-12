# Numetry Front-end Developer Exercise

## The Exercise

Numetry is an EdTech company that is built to help kids and Teachers to find out and keep kinds having fun learning. Based on that we need to build a Web Panel to Teachers see and understand the student's progress and also create exercises based in the mini-games skills.
To help us with this challenge we need to hire developers that must demonstrate an ability to read existing code and write new code using ReactJs, JS ES6+, Typescript and CSS. For that reason, this exercise provides boilerplate code that you are expected to extend and utilize in your solution.

This is a pair programming exercise and there is no time limit. If you get stuck, ask for help! Software development is a collaborative process! We are there to help guide you as we come to a solution together.

## Set-up Instructions

Make sure you have `npm > 5` and `node > 14` installed before starting
Clone this project: `git clone `
Open the project in VS Code
Open the `project folder` scene in the Scenes folder.

## The Goal

Add the remaining functionality to the Login form found on the `Exercise` scene. The functionality that needs added is:
The ability to define a css style to the login form page considering a responsive layout
The ability to login with a valid username and password, save the user profile data in a state manager
The ability to print the server error in console with an invalid username and password
The ability to get and show the user data profile in a second page after the success login.

## Acceptance Criteria

    You must have to define a style css for the form considering a responsive pabe.
    You must send a `POST` request to the following endpoint: `games/loginFast`
    When the user clicks the "Login" button, the Login button should be disabled to prevent multiple login attempts.
    When a user enters an invalid username and password, the Login button should enable so the user can try again.
    When a user enters an invalid username and password, you should display the error message from the server in the Debug console.
    When a user enters a valid username and password pair, the user should be redirect to an another page and render the User profile data, no need any css style on that page.
    You can use this as valid Test Data: username: `numetryjob` and password: `jobnumetry`

## Tips:

    The response data has been modeled for you already. No need to model the data.

## Available Scripts

-`npm or yarn start`: Run the project in development mode with hot reload. The application will open at `http://localhost:3000/`

-`npm or yarn build`: Build artifacts and store them in the `dist/` directory. use the `--prod` flag for production mode.
