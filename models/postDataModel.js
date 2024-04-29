/**
 * @description Defines a model for the post data required for submitting vehicle points.
 * This model is populated with values obtained from environment variables.
 */
const postDataModel = {
  // Latitude of the vehicle's position
  lat: parseFloat(process.env.LATITUDE),

  // Longitude of the vehicle's position
  lon: parseFloat(process.env.LONGITUDE),

  // Course of the vehicle (direction of travel) in degrees
  course: parseInt(process.env.COURSE),

  // Altitude of the vehicle above sea level
  alt: parseInt(process.env.ALTITUDE),

  // Speed of the vehicle in meters per second
  speed: parseInt(process.env.SPEED),

  // Accuracy of the GPS position in meters
  accuracy: parseFloat(process.env.ACCURACY),

  // Boolean indicating whether the vehicle is active or not
  is_active: process.env.IS_ACTIVE === "true",

  // Accelerometer data for the vehicle
  accelerometer: [
    {
      // X-axis acceleration
      x: parseFloat(process.env.ACCELEROMETER_X),

      // Y-axis acceleration
      y: parseFloat(process.env.ACCELEROMETER_Y),

      // Z-axis acceleration
      z: parseFloat(process.env.ACCELEROMETER_Z),
    },
  ],
};

/**
 * @description Exports the postDataModel for use in other modules.
 */
module.exports = postDataModel;
