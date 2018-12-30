module.exports = function(sequelize, DataTypes) {
   var Customer = sequelize.define("Customer", {
      // Giving the Customer model a name of type STRING
      name: DataTypes.STRING
    });
  
    Customer.associate = function(models) {
     models.Customer.hasMany(models.Burgers);
    };
    return Customer;
  };
  