# Login

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Mini servidor 

const express = require("express");
// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(cors());

// app.post("/sign", (req, res) => {
//   const email = "mrjoao16@gmail.com";
//   const password = "123456";

//   if (req.body.email === email && req.body.password === password) {
//     const data = {
//       nome: "Dener Troquatte",
//       email,
//       role: ["sysAdmin"],
//     };

//     const token = jwt.sign({ data }, "SECRET", {
//       expiresIn: 100000,
//     });

//     return res.json({ token: token });
//   }

//   res.status(500).json({ message: "Usuário ou senha incorreta" });
// });

// app.listen(port, () => {
//   console.log(`Link => http://localhost:${port}`);
// });

