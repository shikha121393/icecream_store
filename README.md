# icecream_store
This repository is to get top five ice cream businesses at particular location

# Requirement
Get all the ice cream businesses from Alphabetta, also get the business details and reviews.

# Technologies
UI: ReactJs
API: NodeJs

# NodeJs

- Have use "Express generator npm package" for node js setup.
- There is a router module used for writing all the routes(Here in this, there is only one route).
- There are there Endpoints exposed.

  # http://localhost:9000/
    This API is for getting the top 5 ice cream businesses.
  # http://localhost:9000/details/{id}
    This API is for getting the business details based on Id
  # http://localhost:9000/reviews/{id}
    This API is for getting the business reviews based on Id

# ReactJs
- Have used 'creat-react-app' npm package for react js setup
-There is one component "App" for displaying top 5 list of ice cream businesses
-There are two links for each business 1) more info 2) reviews
- more info link when clicked, will hit the  http://localhost:9000/details/{id} API and result will be printed in the console
- reviews link when clicked, will hit the  http://localhost:9000/reviews/{id} API and result will be printed in the console
