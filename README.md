# Social-Network-API
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
   
  ## Table of Content
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Questions](#Questions)
  - [Test](#Test)
  - [License](#license)


  ## Description
  This project is functionality or backend of a social media app. I learned a lot about mongoDB and mongoose during this project. The app allows a user to find all users, get a single user, create/update/delete users as well as add friends to a friend list. The user can also find all users thoughts or a single user's thoughts. The app can also create/update/delete individual thoughts and add/delete reactions on a thought. 

  ## Installation
  Please install express, mongoose, and mongoDB. It is also necessary to have insomnia to run the CRUD operations.

  ## Usage
To start please install all the node packages with npm install or npm i. Next open the terminal and enter node index.js to start the application. Once the port is open, use insomnia to run the crud operations for the thoughtRoutes and userRoutes. 

Here is a list to use for the userRoutes:

GET /api/users (shows all users)

POST /api/users (creates a user)

GET  /api/users/:userId (gets a single user)

PUT  /api/users/:userId (can change a single user information)

DELETE /api/users/:userId (deletes a single user)

POST /api/users/:userId/friends/:friendId (adds a friend to user friend list)


Here is a list for the thoughtRoutes:

GET /api/thought (gets all thoughts)

POST /api/thought (creates a thought)

GET /api/thought/:thoughtId (gets a single thought)

PUT /api/thought/:thoughtId (edits a single thought)

DELETE /api/thought/:thoughtId (deletes a single thought)

POST /api/thought/:thoughtId/reactions (posts a reaction about a thought)

DELETE /api/thought/:thoughtId/reactions/:reactionId (deletes a reaction about a thought)

  ## Contribution
  Please contact me with any questions.

  ## Questions
  email- dcastillomar89@yahoo.com
  
  github- dcastillomar

  ## Test 
  N/A

  ## License
    
This project is licensed under the MIT license.
