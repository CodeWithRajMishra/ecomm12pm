const AdminModel=require("../models/adminModel");


const adminLogin=async(req, res)=>{
    const { adminuser, adminpassword }= req.body;
    try {
        const Admin= await AdminModel.findOne({adminid:adminuser});
        
        if (!Admin)
        {
            res.status(400).json({msg:"Invalid ID!"});
        }

        if(Admin.adminpassword!=adminpassword)
        {
            res.status(400).json({msg:"Invalid Password!"});
        }

        res.status(200).json(Admin);
      
    } catch (error) {
         console.log(error);
    }
    
   
}



module.exports ={
    adminLogin
}