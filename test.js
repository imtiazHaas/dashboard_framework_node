const express = require("express");
const router = require("./routes/index");
const authController = require("./controllers/authController");
const apiController = require("./controllers/apiController");

const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
(async () => {
  try {
    const accessToken = await authController.authenticate();
  
    await new Promise (resolve => setTimeout(resolve, 3000));
    await apiController.accessProtectedEndpoint(accessToken);
    await new Promise (resolve => setTimeout(resolve, 3000));
    await apiController.submitPointVehicl_2(accessToken);
    await apiController.submitPointVehicl_3(accessToken); 
    await new Promise (resolve => setTimeout(resolve, 3000));
    await apiController.submitPointVehicl_4(accessToken);              // Start the server
    await apiController.submitPointVehicl_5(accessToken);
    await new Promise (resolve => setTimeout(resolve, 3000));
    await apiController.submitPointVehicl_6(accessToken);
		await apiController.submitPointVehicl_7(accessToken);
		await apiController.submitPointVehicl_8(accessToken);
		await apiController.submitPointVehicl_9(accessToken);
		await apiController.submitPointVehicl_10(accessToken);
    await apiController.submitLocation_WithThing11(accessToken);
		await apiController.submitLocation_WithThing12(accessToken);
    await apiController.updateAsset_Vehicl_10_defaults(accessToken);


    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error.message);
    process.exit(1); // Exit the process with a non-zero status code
  }
})();
