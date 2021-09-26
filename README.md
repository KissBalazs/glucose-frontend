# GlucoseFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

## Dependencies
- Angular 12
- Angular Material
- Compodoc

## Commands
- `ng serve` to start a dev server.  `http://localhost:4200/` is a CORS exception which can connect to the database.
- `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
  - please note that due to time limitiations, I did not had the time to cover the application with appropriate coverage volume. 
- `npm run documentation` to genearte and serve Frontend Code Documentation.
 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Documentation
- Documentation can be view in the `/documentation` folder, or created by the commands above.

## Notes
- I have implemented a basic token based authorization to the backend, with the CORS exception for angular dev server's port(4200)
- I have created a very simple data service, which is able to query the backend for data.
- I have created a minimal DAO representation of the Data.
- I have spent roughly 1 hour on the Front-end application, to reach this state. I think it serves as a good foundation for every other Task and Bonus objectives, but I have just simtply run out of time to complete them in the 3 our time window.
- Upon starting the app with `ng serve` and with a running backend, after clicking on the "login" button, hitting the "refresh" button will query real data.
- I run out of time when I was working on the table filtering and sorting.
- I created some test, but it's nearly not enough to properly cover the whole app yet.
- I have left the Debug information (Auth token) in by purpose: of course this is not something we would leave in a production app.
