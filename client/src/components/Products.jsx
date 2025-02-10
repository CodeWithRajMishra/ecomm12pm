import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';


const Products = () => {
   const [mydata, setMydata]= useState([]);

   const dispatch= useDispatch();
   const cursorPointer={
      cursor:'pointer'
   }

   const loadData=async ()=>{
       try {
         let api="https://ecomm12pm.onrender.com/products/productdisplay";
         const response= await axios.get(api);
         setMydata(response.data)
         console.log(response.data);
       } catch (error) {
          console.log(error);
       }
   }

   useEffect(()=>{
      loadData();
   }, [])


   const proDisplay=(id)=>{
      navigate(`/viewProduct/${id}`)
   }

   const proAns= mydata.map((item)=> (
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                     <i>
                   <img style={cursorPointer}  onClick={()=>{proDisplay(item._id)}} src={`http://localhost:8000/${item.defaultImage}`}  style={{height:'200px'}}/>
                        </i>
                     <h3>{item.productname}</h3>
                     <span>{item.productprice}</span>
                     <br/>
                     <Button variant="success" 
                 onClick={()=>{dispatch(addtoCart({id:item._id, name:item.productname, brand:item.productbrand, category:item.productcategory, price:item.productprice, image:item.defaultImage, qnty:1}))}}    > Add to Cart</Button>
                  </div>
               </div> 
                ))

  const navigate = useNavigate();

  const handleMouseOver = e => {
    e.currentTarget.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.2)';
    e.currentTarget.style.padding = '10px';
    e.currentTarget.style.backgroundColor = 'rgb(255, 215, 0)';4
    e.currentTarget.style.color = 'black';
    e.currentTarget.style.cursor='pointer';
  };

  const handleMouseOut = e => {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.padding = '0px';
    e.currentTarget.style.backgroundColor = 'black';
    
  };

 
  return (
    <>
     <div className="product">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                     <h2>our <strong className="black">products</strong></h2>
                     <span>We package the products with best services to make you a happy customer.</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="product-bg">
         <div className="product-bg-white">
         <div className="container">
            <div className="row">
               { proAns  }
              
               </div>
            </div>
         </div>
         
      </div>
    </>
  );
};

export default Products;