import React from 'react';

import p1 from '../assets/images/icon/p1.png';
import p2 from '../assets/images/icon/p2.png';
import p3 from '../assets/images/icon/p3.png';
import p4 from '../assets/images/icon/p4.png';
import p5 from '../assets/images/icon/p5.png';
import p6 from '../assets/images/icon/p6.png';
import p7 from '../assets/images/icon/p7.png';

import { useNavigate } from 'react-router-dom';
const Product = () => {
  const navigate = useNavigate();
  
  const data =[
    { id:1, img:p1, title:"Norton Internet Security", price:"$25.00"},
    { id:2, img:p2, title:"Norton Internet Security", price:"$25.00"},
    { id:3, img:p3, title:"Norton Internet Security", price:"$25.00"},
    { id:4, img:p4, title:"Norton Internet Security", price:"$25.00"},
    { id:5, img:p5, title:"Norton Internet Security", price:"$25.00"},
    { id:6, img:p6, title:"Norton Internet Security", price:"$25.00"},
    { id:7, img:p7, title:"Norton Internet Security", price:"$25.00"},
    { id:8, img:p1, title:"Norton Internet Security", price:"$25.00"}, 
  ]

  return (
    <>
           <div className="brand_color">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="titlepage">
                        <h2>our product</h2>
                    </div>
                </div>
            </div>
        </div>

    </div>
      <div className="product">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                     
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
               {
                 data.map((item, index) => (
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index} onClick={()=>{navigate(`/viewProduct/${item.id}`)}}>
                  <div className="product-box">
                     <i><img src={item.img}/></i>
                     <h3>{item.title}</h3>
                     <span>{item.price}</span>
                  </div>
               </div>
                 ))
               }
               </div>
            </div>
         </div>
    
    </div>
    </>
  );
};

export default Product;