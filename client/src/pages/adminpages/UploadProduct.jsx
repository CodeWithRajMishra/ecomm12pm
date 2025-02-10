
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axios from 'axios';

const UploadProduct=()=>{
  const [files, setFiles] = useState([]);
  const [input, setInput]= useState({});

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

const handleInput=(e)=>{
     let name= e.target.name;
     let value= e.target.value;

     setInput(values=>({...values, [name]:value}));
     console.log(input);
}


  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let key in input) {
         formData.append(key, input[key]);
      }

    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }


    try {
      let api="https://ecomm12pm.onrender.com/admin/productsave";
      const response = await axios.post(api, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
       alert("file upload!!!");
    } catch (error) {
       console.log(error)
    }
  };




    return(
        <>
           <h1> Upload New Product</h1>
           <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product name </Form.Label>
        <Form.Control type="text" name="productname" value={input.productname} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Product Brand </Form.Label>
        <Form.Select aria-label="Default select example" name="productbrand" value={input.productbrand} onChange={handleInput}>
      <option>Select Product Brand</option>
      <option value="Apple">Apple</option>
      <option value="Sony">Sony</option>
      <option value="Samsung">Samusung</option>
      <option value="Vivo">Vivo</option>
      <option value="Oppo">Oppo</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Select aria-label="Default select example" name="productcategory" value={input.productcategory} onChange={handleInput}>
      <option>Open this select menu</option>
      <option value="Keypad">Key Pad</option>
      <option value="Smartphone">Smartphone</option>
      <option value="Android">Android</option>
      <option value="IOS">IOS</option>
      <option value="Tablet">Tablet</option>
    </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Decription</Form.Label>
        <Form.Control type="text" name="productdescription" value={input.productdescription} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" name="productprice" value={input.productprice} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Upload Images</Form.Label>
        <Form.Control type="file" multiple onChange={handleFileChange} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleUpload}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default UploadProduct