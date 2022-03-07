# basic-api-server

we learned how to bulid a API server ,and how we connect our server to the postgres server which is a relational database managment system .
the steps that we follow to build this app as follows :

   -first we created a database and did the connection to our database with the postgres, then we run the server.
   
   -  we used a **sequelize** which is  a promise-based , we used it to help us  to switch to a different Database system without 
        having to rewrite all our  DB queries logic, each model in it represent a tables,  we install it with the pg(because sequlized uses pg) => npm i sequlized pg and           then we created  two tables (food and clothes).
        
   -  next  we create a route module for each table that we’ve created, and inside of each route we created REST route handlers for each of the REST Methods , i 
      Create a data inside the clothes and food tables  using POST , Read a list of data using GET ,Read a specific data using GET ,Update a a record in table                    using PUT , and destroy a record using DELETE and we did that using postman .
     
   -   then we added the ssl connection to deploying purpose 

   -  and last thing we did the testing Requirements for :404 on a bad route ,and bad method .also for the CRUD methods  .
   -  
**MY LINKS**


- [The pullrequest link](https://github.com/neveenaburomman/basic-api-server/pull/1)

- [The herokuapp link](https://neveen97-basic-api-server.herokuapp.com/clothes)

- [The Action link](https://github.com/neveenaburomman/basic-api-server/actions)

