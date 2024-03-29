# Shelter Meal

Shelter Meal is a web application that connects restaurants with shelters to donate meals. It aims to reduce food waste while supporting shelters and those in need within communities. The app is built using React for the frontend, Node.js with Express for the backend, and MySQL for the database.

## Features

- **Restaurant Listings:** Browse a curated list of restaurants offering surplus meals for donation.
- **Shelter Acceptance:** Shelters can accept donations, view meal details, and arrange for pickup or delivery.
- **Location-based Search:** Find nearby restaurants and shelters based on user's location or specified area.

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`, and add the password that you can find in .env.

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called `establishment` and `postmeal` in your  database.

- In your MySQL console, you can run `use sheltermeal;` and then `show tables;` to see the structure of the tables. Then you can use `describe establishment` and `describe postmeal`.

### Development

- Run `npm start` in project directory to start the Express server on port 4000
- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.

You can test your client app in http://localhost:5173
You can test your API in http://localhost:4000/api

## API endpoints brief explanation 

-GET /api/restaurants: Retrieves a list of all restaurants or restaurants in a specified area.

-GET /api/restaurant/:id: Retrieves details of a specific restaurant based on its ID.

-GET /api/restaurant/:id/meals: Retrieves available meals for donation by a specific restaurant based on its ID.

-GET /api/establishment: Retrieves a list of all establishments (shelters or similar entities).

-GET /api/establishment/:id: Retrieves details of a specific establishment based on its ID.

-POST /api/establishment: Adds a new establishment to the database.

-DELETE /api/establishment/:id: Deletes a specific establishment from the database based on its ID.

-GET /api/postmeal: Retrieves a list of all meal posts.

-GET /api/postmeal/:id: Retrieves details of a specific meal post based on its ID.

-POST /api/postmeal: Adds a new meal post to the database.

-DELETE /api/postmeal/:id: Deletes a specific meal post from the database based on its ID.
