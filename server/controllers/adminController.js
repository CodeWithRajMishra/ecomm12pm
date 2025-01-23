const AdminModel=require("../models/adminModel");


const adminLogin=async(req, res)=>{
    const { adminuser, adminpassword }= req.body;
    try {
        const Admin= await AdminModel.find({adminid:adminuser});
        if (!Admin)
        {
            res.status(400).send({msg:"Invalid Admin ID"});
        }
        if (Admin.adminpassword!=adminpassword)
        {
            res.status(400).send({msg:"Invalid Admin Password"});
        }
        res.status(200).send(Admin);
    } catch (error) {
         console.log(error);
    }
    
    res.send("OK");
}



module.exports ={
    adminLogin
}