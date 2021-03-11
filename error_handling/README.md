## JSON based web service

----------------------------------------------
#### Table of contents:
1. Introduction
2. Tech Stack
3. Getting Started - Installation and running instructions
4. GitHub Repository
5. Heroku Link
 
 

---------------------------------------------------------------------------------------------------

#### 1.Introduction:

This is a JSON based web service where when a post request is made to the Heroku URL, 
the JSON data is filtered and response is provided with new fields.
 
-----------------------------------------------------------------------------------------------------

#### 2.Tech Stack:
* Node JS
* Express JS
* JavaScript

--------------------------------------------------------------------------------------------------------

#### 3.Getting Started - Installation and running instructions:

* Step 1: Download Node js
* Step 2: Download Visual Studio Code
* Step 3: Import the zipped code file into the visual studio code
* Step 4: In the development environment, change the start script in package.json file from node to nodemon like below

 From: 
     
      "scripts": {
    "test": "jest ",
    "start": "node server.js"
  }

  To:

   "scripts": {
    "test": "jest ",
    "start": "nodemon server.js"
  }

  * Step 5: From the terminal execute npm start to see the application running
  * Step 6: In a javascript enabled web browser type http://localhost:3000 to see the message of the when get request is made that is
            "Please add a body to your request!"

  * Step 7: Post data from your application using the heroku link provided to test the application or alternatively use postman to 
            check the output.


-------------------------------------------------------------------------------------------------------

#### 4. GitHub Repository 
GitHub- URL : https://github.com/syedatahreem/json-based-web-app
 

------------------------------------------------------------------------------------------------------

#### 5.Heroku Link
Heroku-Link :  https://syedatahreem-webapp.herokuapp.com/

 
 