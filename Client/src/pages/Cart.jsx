import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { FaShoppingCart, FaMoneyCheck } from 'react-icons/fa'

import p1 from '../assets/images/icon/p1.png';
import p2 from '../assets/images/icon/p2.png';
import p3 from '../assets/images/icon/p3.png';
import p4 from '../assets/images/icon/p4.png';
import p5 from '../assets/images/icon/p5.png';
import p6 from '../assets/images/icon/p6.png';
import p7 from '../assets/images/icon/p7.png';

const dummyData =[
    { id:1, img:p1, title:"Norton Internet Security", price:25.00, quantity: 1}, 
    { id:2, img:p2, title:"Norton Internet Security", price:25.00, quantity: 1},,
    { id:3, img:p3, title:"Norton Internet Security", price:25.00, quantity: 1},,
    { id:4, img:p4, title:"Norton Internet Security", price:25.00, quantity: 1},,
    { id:5, img:p5, title:"Norton Internet Security", price:25.00, quantity: 1},,
    { id:6, img:p6, title:"Norton Internet Security", price:25.00, quantity: 1},,
    { id:7, img:p7, title:"Norton Internet Security", price:25.00, quantity: 1},,
    { id:8, img:p1, title:"Norton Internet Security", price:25.00, quantity: 1},, 
  ]

const Cart = () => {
  const totalAmount = dummyData.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
         <div><FaShoppingCart /> Your Cart  </div>
         <div><FaMoneyCheck /> Total: {totalAmount}</div>
         <div><Button variant="primary" > <FaMoneyCheck /> Checkout </Button></div>
      </div>
      
      <div style={{height:"50vh", overflowY:"scroll"}}>
        <Table striped bordered hover>
          <thead style={{position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1}}>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody >

            {dummyData.map((item, index) => (
                <tr key={index}>
                <td>{index + 1}</td>
                <td><img src={item.img} alt={item.title} style={{width: '50px', height: '50px'}} /></td>
                <td>{item.title}</td>
                <td>{Number(item.price) * item.quantity}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={3}>Total</td>
              <td>{totalAmount}</td>
            </tr>
          </tbody>
        </Table>
      </div>
     
    </div>
  )
}

export default Cart