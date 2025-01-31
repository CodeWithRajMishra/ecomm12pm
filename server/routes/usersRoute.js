const express= require("express");
const route = express.Router();
const userController= require("../controllers/userController");
route.post("/userregister", userController.userSave);
route.post("/userlogin", userController.userLogin);

module.exports= route