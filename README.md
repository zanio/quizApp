# [quiz](https://quiz-ani.herokuapp.com/)
This product is a web based game that allows audiences to answer 
questions and review their performance at the end of the game. 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Deploy the application on Heroku 
 - To deploy the application clone this repository
-  Create an app on heroku or
-  run ` heroku git:remote -a quiz-ani` from your terminal
-   and finally  run:
-  `git push heroku`

### Tech Stack
The major tech stack used include:
-  Vue and Vue Router SPA
- express for serving the application
- Tailwindcss: for styling

### What will you do differently to make the application scalable?
- Add Vuex to manage the state 
- increase the number of Questions
- create components and make them re-usable

### In a different environment or if you were given more time, what will you do differently?

- fetch questions from an endpoint of questions
- record participants data and use it for analytics to future participants.  informations such as 
  number of participants that has taken the quiz today would be displayed on the home page
- ability for participants to leave a feedback
- Add animation and pop up effect to the timer
- style the timer more.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
