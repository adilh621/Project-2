// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const router = require("../html-routes");


  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  // router.post("/api/login", passport.authenticate("local"), (req, res) => {
  //   // Sending back a password, even a hashed password, isn't a good idea
  //   res.json({
  //     email: req.user.email,
  //     id: req.user.id
  //   });
  // });

  // app.post("/api/signup", (req, res) => {
  //   db.LogIn.create({
  //     email: req.body.user,
  //     password: req.body.password
  //   })
  //     .then(() => {
  //       res.redirect(307, "/api/login");
  //     })
  //     .catch(err => {
  //       res.status(401).json(err);
  //     });
  // });

  // Route for logging user out
  // app.get("/logout", (req, res) => {
  //   req.logout();
  //   res.redirect("/");
  // });

  // Route for getting some data about our user to be used client side
  // app.get("/api/user_data", (req, res) => {
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   } else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });
