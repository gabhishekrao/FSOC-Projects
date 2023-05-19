# MERN Stack Hotel Booking Application

This is a hotel booking application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application consists of three main components: the server, the admin panel, and the client interface.

## Server

The server component of the application is responsible for handling backend functionality and communication with the database. It is built using Node.js and Express.js, and utilizes MongoDB as the database.

### Key Features

- Handles user authentication and authorization using JSON Web Tokens (JWT).
- Implements CRUD operations for managing hotel listings, user bookings, and user profiles.
- Provides API endpoints for client-side interactions.

## Admin Panel

The admin panel is a web interface specifically designed for administrators to manage hotel listings, bookings, and user accounts. It is built using React.js and communicates with the server component to perform administrative tasks.

### Key Features

- Secure login functionality for admin users.
- Allows administrators to create, update, and delete hotel listings.
- Provides a dashboard to view and manage user bookings.
- Enables administrators to manage user accounts and profiles.

## Client Interface

The client interface is a web application that allows users to browse and book hotel rooms. It is built using React.js and interacts with the server component to fetch data and perform booking operations.

### Key Features

- User registration and login functionality.
- Displays a list of available hotel listings with search and filtering options.
- Allows users to view detailed information about a particular hotel.
- Provides a booking interface for users to select dates, room type, and submit booking requests.
- Allows users to manage their bookings and view booking history.

## Installation and Setup

To run the MERN Stack Hotel Booking Application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the server directory and install the server dependencies using `npm install`.
3. Create a `.env` file in the server directory and configure the following environment variables:
   - `MONGODB_URI`: MongoDB connection URI.
   - `JWT_SECRET`: Secret key for JWT token generation.
   - `PORT`: Port number for the server to run on.
4. Start the server by running `npm start`.
5. Navigate to the admin directory and install the admin panel dependencies using `npm install`.
6. Create a `.env` file in the admin directory and configure the following environment variables:
   - `REACT_APP_SERVER_URL`: URL of the server component.
7. Start the admin panel by running `npm start`.
8. Navigate to the client directory and install the client dependencies using `npm install`.
9. Create a `.env` file in the client directory and configure the following environment variables:
   - `REACT_APP_SERVER_URL`: URL of the server component.
10. Start the client interface by running `npm start`.

Make sure you have Node.js and MongoDB installed on your machine before starting the application.

## Conclusion

The MERN Stack Hotel Booking Application provides a comprehensive solution for managing hotel listings, bookings, and user accounts. It leverages the power of the MERN stack to deliver a seamless user experience for both administrators and clients. Feel free to explore the codebase and customize it according to your specific requirements. Happy coding!
