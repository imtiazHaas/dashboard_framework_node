/**
 * @description Imports the axios module for making HTTP requests.
 */
const axios = require("axios");

/**
 * @description Imports the dotenv configuration to access environment variables.
 */
const dotenv = require("../config/dotenv");

/**
 * @description Asynchronously authenticates a user by obtaining an access token from the authentication server.
 * @returns {Promise<string>} A promise that resolves with the access token if authentication is successful.
 * @throws {Error} If an error occurs during the authentication process.
 */
async function authenticate() {
  try {
    // Make a POST request to the authentication server to obtain an access token
    const authResponse = await axios.post(
      "https://auth.haasalertdev.com/oauth/token",
      {
        // Request body parameters for password grant type authentication
        grant_type: "password",
        username: "qatest@haasalert.com",
        password: "newTest21!",
      },
      {
        headers: {
          // Include authorization token in request headers
          Authorization: `Bearer ${dotenv.TOKEN}`,
        },
      }
    );

    // Log successful authentication status
    console.log("Is authenticated using creds.", authResponse.status);

    // Return the access token obtained from the authentication server
    return authResponse.data.access_token;
  } catch (error) {
    // Log and rethrow any errors that occur during the authentication process
    console.error("Authentication Error:", error.message);
    throw error;
  }
}

/**
 * @description Exports the authenticate function for use in other modules.
 */
module.exports = {
  authenticate,
};
