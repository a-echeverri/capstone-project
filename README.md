
# Cocktail Party

Cocktail Party is inspired by the app Cocktail Party that allows users to find cocktail recipes based on different categories and different ingredients that can be used in cocktails. Logged in users can also create their own cocktails and ingredients to be added to the app.

Users are able register for their own accounts, allowing them to create their own cocktails to share with images and instructions. Other registered users are then able to find these drinks. Users without accounts are still able to view all cocktails and ingredients, which are organized by category.

## Link to live project on Heroku

https://cocktail-party-app.herokuapp.com/

## Link to wiki docs

https://github.com/a-echeverri/capstone-project/wiki

## Homepage
![](https://i.imgur.com/V986mqW.png)

## Technologies Used
* Redux
* HTML/CSS
* React
* Flask
* Postgresql
* SQLAlchemy
* Alembic

## Discussion of technologies used

A wide variety of technologies are used in this project. In the back end, Flask-SQLAlchemy was used to manage the database. Flask helped
to build and implement the API routes. WTForms was used to provide seamless backend validations for forms. When 
designing the front end, React's powerful HTML syntax was used along with CSS to create a functional and attractive app. Finally, Redux was used to manage and manipulate the state, producing dynamic pages and quick refreshing.

## Challenges

* Mantaining and manipulating state
  * The React-Redux flow can be challenging to use so there was a lot of study to properly manage multiple slices of states and understand how the stores' action and thunks work together. 
* Using a Python-based backend with a JS-based frontend
  * Python was chosen for building the backend through Flask, but managing how the data flows and the movement of data to the Javascript-based frontend was sometimes hard to follow. Issues with parsing data types unique to Python and ensuring the JSON requests were properly structured was the top priority.
 * Error Handling
   *  Figuring out which way to handle errors either through the WTForms validation with custom messages or through front end error mapping took some time to decide. 

## Future Features
* I would like to implement a way to save cocktails to favorites for easy viewing in your profile. Also the ability to get recommendations based on what ingredients are in your favorites.
