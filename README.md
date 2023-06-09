------------------------------------

# Social Network Backend

This repository contains the backend implementation for a social networking website using Node.js, Express, and MongoDB.

## Features

The implemented features of the app are as follows:

### Profile Routes

- **Create a Profile**
  - Method: POST
  - Endpoint: `/api/user/profile`
  - Handler: `createProfile`
  - Description: Creates a new user profile with the provided details, including name, email, password, age, bio, and open status. Returns the created profile.

- **Get All Profiles**
  - Method: GET
  - Endpoint: `/api/user/profiles`
  - Handler: `getProfiles`
  - Description: Retrieves all user profiles. Returns an array of profiles.

- **Get a Profile by ID**
  - Method: GET
  - Endpoint: `/api/user/profiles/:id`
  - Handler: `getProfileById`
  - Description: Retrieves a user profile by the provided ID. Returns the profile if found, or an error if the profile doesn't exist.

- **Update a Profile**
  - Method: PUT
  - Endpoint: `/api/user/updateprofile/:id`
  - Handler: `updateProfile`
  - Description: Updates a user profile with the provided ID. Returns the updated profile if successful, or an error if the profile doesn't exist.

- **Delete a Profile**
  - Method: DELETE
  - Endpoint: `/api/user/profiles/:id`
  - Handler: `deleteProfile`
  - Description: Deletes a user profile with the provided ID. Returns a success message if the profile is deleted successfully, or an error if the profile doesn't exist.

### Message Routes

- **Send a Message**
  - Method: POST
  - Endpoint: `/api/message/create`
  - Handler: `sendMessage`
  - Description: Sends a message from the sender to the receiver. Requires the sender and receiver IDs along with the message content. If the receiver's profile is open, the message is saved and returned. Otherwise, it returns an error message stating that the user profile is private.

- **Get Messages**
  - Method: POST
  - Endpoint: `/api/message/get`
  - Handler: `getMessages`
  - Description: Retrieves all messages between two users. Requires the sender and receiver IDs. Returns an array of messages sorted by the timestamp of their creation.

## Setup and Running the App

To set up and run the app, follow the steps below:

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Install dependencies:

   ```
   cd social-network-backend
   npm install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables to the `.env` file:
     - `MONGO_URI`: The MongoDB connection URI.
     - `PORT`: The port number for the server to listen on.

4. Start the server:

   ```
   npm start
   ```

   The server will start running and listening on the specified port.

## Additional Libraries

The following additional libraries are used in this project:

- `express`: A web application framework for Node.js.
- `mongoose`: A MongoDB object modeling tool.
- `body-parser`: A middleware to parse request bodies.
- `dotenv`: A module to load environment variables from a `.env` file.
- `http`: A built-in Node.js module for creating an HTTP server.

Please make sure to install these dependencies using `npm install` before running the app.

## Assumptions

The following assumptions were made during the

 implementation of the features:


- By default, a user profile is open, allowing messages to be sent. The privacy setting can be changed.



------------------------------------
