// Export routes for server.js to use.
//module.exports = router;

var db = require("../models");

// Create all our routes and set up logic within those routes where required.

module.exports = function (app) {
  app.get("/", function (req, res) {
 

    db.Customer.findAll({}).then(function (dbCustomer) {
   

      db.Burgers.findAll({
        include: [db.Customer]
      }).then(function (dbBurger) {

       
        res.render("index", { 
          customer: dbCustomer,
          burger: dbBurger

         });
      });

    });


  });

  app.post("/api/burgers", function (req, res) {
    db.Burgers.create(req.body).then(function (dbBurger) {
      res.json(dbBurger);
    });


  });





  app.put("/api/burgers/:id", function (req, res) {

    db.Burgers.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function (dbBurger) {
        res.json(dbBurger);
      });



  });

  app.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });
}

