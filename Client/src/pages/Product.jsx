import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import p1 from '../assets/images/icon/p1.png';
import p2 from '../assets/images/icon/p2.png';
import p3 from '../assets/images/icon/p3.png';
import p4 from '../assets/images/icon/p4.png';
import p5 from '../assets/images/icon/p5.png';
import p6 from '../assets/images/icon/p6.png';
import p7 from '../assets/images/icon/p7.png';

const Product = () => {
  const handleMouseOver = e => {
    e.currentTarget.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.2)';
    e.currentTarget.style.padding = '10px';
    e.currentTarget.style.backgroundColor = 'rgb(255, 215, 0)';4
    e.currentTarget.style.color = 'black';
  };

  const handleMouseOut = e => {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.padding = '0px';
    e.currentTarget.style.backgroundColor = 'black';
    e.currentTarget.style.color = 'rgb(255, 215, 0)';
  };

  const data =[
    {
      img:p1,
      title:"Norton Internet Security",
      price:"$25.00"
    },
    {
      img:p2,
      title:"Norton Internet Security",
      price:"$25.00"
    },
    {
      img:p3,
      title:"Norton Internet Security",
      price:"$25.00"
    },
    {
      img:p4,
      title:"Norton Internet Security",
      price:"$25.00"
    },
    {
      img:p5,
      title:"Norton Internet Security",
      price:"$25.00"
    },
    {
      img:p6,
      title:"Norton Internet Security",
      price:"$25.00"
    },
    {
      img:p7,
      title:"Norton Internet Security",
      price:"$25.00"
    },
    {
      img:p1,
      title:"Norton Internet Security",
      price:"$25.00"
    }
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
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
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