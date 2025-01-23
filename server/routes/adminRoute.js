const express= require("express");
const route = express.Router();
const AdminControoler=require("../controllers/adminController");

route.post("/adminlogin", AdminControoler.adminLogin);



module.exports=route;