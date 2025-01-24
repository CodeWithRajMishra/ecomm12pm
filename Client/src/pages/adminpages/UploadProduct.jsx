
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UploadProduct=()=>{
    return(
        <>
           <h1> Upload New Product</h1>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product name </Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Product Brand </Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="Keypad">Key Pad</option>
      <option value="Smartphone">Smartphone</option>
      <option value="Andriod">Android</option>
      <option value="IOS">IOS</option>
      <option value="Tablet">Tablet</option>
    </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Decription</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Upload Images</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </>
    )
}

export default UploadProduct