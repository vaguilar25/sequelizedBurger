// Export routes for server.js to use.
//module.exports = router;

var db = require("../models");

// Create all our routes and set up logic within those routes where required.

module.exports = function (app) {
  app.get("/customers", function (req, res) {

    db.Customer.findAll({}).then(function (dbCustomer) {

      var hbsObject = {
        customer: dbCustomer
      };
      res.render("customers", hbsObject);
    });

  });

  app.post("/api/customers", function (req, res) {
    console.log("Entra");
    db.Customer.create(req.body).then(function (dbCustomer) {
      res.json(dbCustomer);
    });


  });

  app.put("/api/customers/:id", function (req, res) {
   
    db.Customer.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function (dbCustomer) {
        res.json(dbCustomer);
      });


    
  });

  app.delete("/api/customers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    db.Customer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbCustomer) {
      res.json(dbCustomer);
    });
  });
}

