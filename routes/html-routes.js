// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var viewsPath = path.join(__dirname, 'views');
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render(path.join(__dirname, "../views/members"), {});
    }
    res.render(path.join(__dirname, "../views/signup"), {});
  });

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render(path.join(__dirname, "../views/members"), {});
    }
    res.render(path.join(__dirname, "../views/members"), {});
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render(path.join(__dirname, "../views/members"), {});
    }
    res.render(path.join(__dirname, "../views/login"), {});
  });

  app.get('/takequiz', function(req, res){
   {
      res.render(path.join(__dirname, "../views/takequiz"));
      
    }
  })

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", function(req, res) {
    res.render(path.join(__dirname, "../views/members"), {});
  });

  app.get("/review", function(req, res) {
    // If the user already has an account send them to the members page
    
    res.render(path.join(__dirname, "../views/review"), {});
  });

  app.get("/create", function(req, res){
    res.render(path.join(__dirname, "../views/create"),{});
  });

};
