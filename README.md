# Numetry Front-end Developer Exercise

## The Exercise

Numetry is an educational platform created by Eduplaytion, an EdTech company based in Norway. Our company mission is to build innovative web-based tools for teachers and engaging video games for pupils to help teach abstract concepts in Mathematics. For our Front-end Web Developer position, we are building a suite of tools for schools and teachers that shows pupil progress over times and other teaching aides.

It is expected that the developer is able to demonstrate an ability to read existing code and write new code using React.js, Typescript and CSS. Due to those requirements, this exercise provides boilerplate code that you are expected to extend and utilize in your solution.

This is a pair programming exercise and there is no time limit. If you get stuck, ask for help! Software development is a collaborative process! We are there to help guide you as we come to a solution together.

## Set-up Instructions

1. Make sure you have `npm > 5` and `node > 14` installed before starting
2. Clone this project: `git clone https://github.com/Eduplaytion/numetry-front-end-exercise.git`
3. Open the project in your IDE of choice.

## The Goal

Add the remaining functionality to the Login form found on the `Exercise` scene. The functionality that needs added is:
1. Add CSS styling to the Login form page while considering responsive design.
2. The ability to login with a valid username and password and to save the user data in a state, informaing the user that the request is in progress and disable the button to don't be clicked until the request response.
3. The ability to show the server error when receiving an error response code.
4. The ability to get and show the user data profile on a second page after the success login.
5. Make the Profile page test works.

## Acceptance Criteria

    - You must define a css for the form considering a responsive page.
    - You must send a `POST` request to the following endpoint: `/login`
    - When the user clicks the "Login" button, the Login button should be disabled to prevent multiple login attempts.
    - When a user enters an invalid username and password, the Login button should enable so the user can try again.
    - When a user enters an invalid username and password, you should display the error message from the server.
    - When a user enters a valid username and password pair, the user should be redirect to an another page and render the User profile data, no need any css style on that page, just something basic if have time.
    - You can use this as valid Test Data: username: `carlos54321@eduplaytion.no` and password: `123456`

## Tips's code considerations:
React components: try to create components for things that we can reuse.
Typescript: try to define interface or types for commom data;
Improve th code to be more reusable and clean;

### User profile data to ve showed in the Profile page:
- firstName
- avartaName
- accountType
- createdAt
- subscriptionPlanId

POST: /login

## Available Scripts

-`npm or yarn start`: Run the project in development mode with hot reload. The application will open at `http://localhost:3000/`

-`npm or yarn pw`: Build artifacts and store them in the `dist/` directory. use the `--prod` flag for production mode.

-`npm or yarn pc`: Build artifacts and store them in the `dist/` directory. use the `--prod` flag for production mode.

-`npm or yarn test`: Build artifacts and store them in the `dist/` directory. use the `--prod` flag for production mode.

-`npm or yarn build`: Build artifacts and store them in the `dist/` directory. use the `--prod` flag for production mode.


## Tech Stack
- ReacjJS 17+
- React route
- Typescript
- HTML, CSS, SASS
- ESLint
- Prettier
- Axios
