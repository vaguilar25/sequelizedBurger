# Eat-Da-Burger!

Is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.
Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
The app will store every burger in a database, whether devoured or not.

In this variation  I added in a Customer association to the project. This will involve creating at least one new Customer model and connecting it with your Burger model.
A customer can have many burgers associated

For example, you could make a site that logs the name of which Customer ate which Burger.

A burger's name cannot be null
A burger's devoured status is false by default
A Customer's name cannot be null

## Topics that we have covered

* Use of Git: Creating a repository
```
    * clone 
    * add 
    * commit 
    * push
```

* Deploy to Heroky
```
    * git remote –v  
    * heroku create
    * git commit -am "<message>"
    * git push heroku master 
```

* Use of NodeJs, Express, JavaScript, Jquery,orm
```
    .
├── config
│   ├── config.json
│  
│ 
├── controllers
│   └── burgers_controller.js
│   └── customers_controller.js
│
├── models
│   ├── burger.js
│   └── customer.js
│   └── index.js
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│       └── js
│           └── burgers.js
│           └── customers.js
│
├── seeders
│   └── 20181228223830-burger-seed-file
│
└── views
    ├── index.handlebars
    ├── customers.handlebars
    └── layouts
        └── main.handlebars
├── server.js
``` 

* NPM Used
```

        npm install body-parser
        npm install express
        npm install express-handlebars
        npm install fs
        npm install install
        npm install mysql2
        npm install path
        npm install squelize
        npm install sequelize-cli
       
        
``` 


* Demo Server:

  https://intense-temple-54106.herokuapp.com/

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The editor used
* [GitHub](https://github.com/) - Version Control
* [Heroku](https://heroku.com) - Deployment

## Versioning

I use [GitHub](https://github.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/vaguilar25/sequelizedBurger). 

## Authors

* **Vivian Aguilar** 

## Acknowledgments

* Jerome Chenette
* Sasha Pastel
* Jimmy Tu
