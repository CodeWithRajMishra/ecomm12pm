import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
const AdminLogin=()=>{
    const [adminuser, setAdminUser] = useState("");
    const [adminpassword, setAdminPassword]=useState("");
  
     const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
             let api="http://localhost:8000/admin/adminlogin";
             const response= await axios.post(api, {adminuser:adminuser, adminpassword:adminpassword});
             console.log(response.data);
        } catch (error) { 
              console.log(error);
        }
     }
    return(
        <>
        <div id="adminForm">
     <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter ID</Form.Label>
        <Form.Control type="text"  name="adminid" value={adminuser} onChange={(e)=>{setAdminUser(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="adminpassword" value={adminpassword} onChange={(e)=>{setAdminPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default AdminLogin;