# Paw Path Home

Welcome to the Paw Path Home application!
This app utilizes a Rails API and a React frontend. This application allows users to post a lost or found pet that other users can view and comment on. The engame idea is to have a space that pet owners and pet finders can help pets get reunited with their owners.  

## Video Demo

Check out [this video](https://youtu.be/9RHkjFBBqnI) for a brief look into the Paw Path Home application.

## Installation

- Fork and Clone this project
- `cd` into the project directory
- Run `bundle`
- Run `Rails Server`
- Run `npm install && npm start -prefix client`

This will host the server locally and open a browser window to display the application. If for some reason the browser doesn't open, but the server started, you can click on the link that appears in the terminal, see below...

Local:            http://localhost:4000/
On Your Network:  http://192.168.1.5:4000/server

## Functionality

- Upon opening the app, you should be directed to a login/sign-in page. If you do not already have an account, enter your desired username and password and click the "Signup" button. If you do have an account already enter the username and password and then click the button "Login".

- Once your account is set up or you have logged in, you will be directed to a home page that welcomes you to the application. Above there will be a navigation bar with links that will take you to the listed "Lost and Found Pets" and your posted "My Pets".

- Navigating to the "Lost and Found Pets" page will allow you to view all of the posted pets and you can update or delete the pets if you are the user who posted them. You can also "See more Details" for each individual pet. This button takes you to a pet detail page that also allows you to post a comment, update your comments, or delete your comments. You can also view other comments to see if you are able to be reunited with your lost pet of have found a pets owner. 

- Navigating to the "My Pets" page will display the pets that you have posted on the application. From here you can also post a pet for all users to see, update your posted pets or delete your posted pets. If an owner is reunited with their pet it is encouraged that a user deletes the posted pet to make way for other lost or found pets. 

- If you are done using the application please click on the logout button on the right of your navigation bar to logout as a user until next time you need "Paw Path Home".

