/**
 * @description Imports the apiService module, which contains methods for accessing protected endpoints and submitting vehicle points.
 */
const apiService = require("../services/apiService");

/**
 * @description Asynchronously accesses a protected endpoint using the methods provided by the apiService module.
 * @returns {Promise} A promise that resolves with the result of accessing the protected endpoint.
 * @throws {Error} If an error occurs while accessing the protected endpoint.
 */
async function accessProtectedEndpoint() {
  try {
    // Access the protected endpoint using the method from the apiService module
    return await apiService.accessProtectedEndpoint();
  } catch (error) {
    // If an error occurs, rethrow it to the caller
    throw error;
  }
}

/**
 * @description Asynchronously submits vehicle point data using the methods provided by the apiService module.
 * @returns {Promise} A promise that resolves with the result of submitting vehicle point data.
 * @throws {Error} If an error occurs while submitting vehicle point data.
 */
async function submitPointVehicl_2() {
  try {
    // Submit vehicle point data using the method from the apiService module
    return await apiService.submitPointVehicl_2();
  } catch (error) {
    // If an error occurs, rethrow it to the caller
    throw error;
  }
}
async function submitPointVehicl_3() {
  try {
    return await apiService.submitPointVehicl_3();
  } catch (error) {
    throw error;
  }
}
async function submitPointVehicl_4() {
  try {
    return await apiService.submitPointVehicl_4();
  } catch (error) {
    throw error;
  }
}
async function submitPointVehicl_5() {
  try {
    return await apiService.submitPointVehicl_5();
  } catch (error) {
    throw error;
  }
}
async function submitPointVehicl_6() {
  try {
    return await apiService.submitPointVehicl_6();
  } catch (error) {
    throw error;
  }
}
async function submitPointVehicl_7() {
  try {
    return await apiService.submitPointVehicl_7();
  } catch (error) {
    throw error;
  }
}
async function submitPointVehicl_8() {
  try {
    return await apiService.submitPointVehicl_8();
  } catch (error) {
    throw error;
  }
}
async function submitPointVehicl_9() {
  try {
    return await apiService.submitPointVehicl_9();
  } catch (error) {
    throw error;
  }
}
async function submitPointVehicl_10() {
  try {
    return await apiService.submitPointVehicl_10();
  } catch (error) {
    throw error;
  }
}
async function submitLocation_WithThing11() {
  try {
    return await apiService.submitLocation_WithThing11();
  } catch (error) {
    throw error;
  }
}
async function submitLocation_WithThing12() {
  try {
    return await apiService.submitLocation_WithThing12();
  } catch (error) {
    throw error;
  }
}
async function updateAsset_Vehicl_10_defaults() {
  try {
    return await apiService.updateAsset_Vehicl_10_defaults();
  } catch (error) {
    throw error;
  }
}


/**
 * @description Exports the accessProtectedEndpoint and submitPointVehicl_2 functions for use in other modules.
 */
module.exports = {
  accessProtectedEndpoint,
  submitPointVehicl_2,
  submitPointVehicl_3,
  submitPointVehicl_4,
  submitPointVehicl_5,
  submitPointVehicl_6,
  submitPointVehicl_7,
  submitPointVehicl_8,
  submitPointVehicl_9,
  submitPointVehicl_10,
  submitLocation_WithThing11,
  submitLocation_WithThing12,
  updateAsset_Vehicl_10_defaults,
};
