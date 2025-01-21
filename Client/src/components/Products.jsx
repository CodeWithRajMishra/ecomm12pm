import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import p1 from '../assets/images/icon/p1.png';
import p2 from '../assets/images/icon/p2.png';
import p3 from '../assets/images/icon/p3.png';
import p4 from '../assets/images/icon/p4.png';
import p5 from '../assets/images/icon/p5.png';
import p6 from '../assets/images/icon/p6.png';
import p7 from '../assets/images/icon/p7.png';

const Products = () => {
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
    <div className="product">
      <div className="product-bg">
        <div className="product-bg-white">
          <Container>
            <Row>
              <Col md={12}>
                <div className="title">
                  <h2>Our <strong className="black">Products</strong></h2>
                  <span>We package the products with best services to make you a happy customer.</span>
                </div>
              </Col>
            </Row>
            <Row style={{ margin: '20px 0px', padding: '20px 0px' }}>
              {
                data.map((item, index) => (
                  <Col xl={3} lg={3} md={6} sm={12}>
                <Card style={{ backgroundColor: 'black', color: 'rgb(255, 215, 0)', borderRadius: '10px', margin: '10px 0px', border:"none" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <Card.Img variant="top" src={item.img} alt="Product 1" className="product-img" />
                  <Card.Body className="product-body">
                    <Card.Title className="product-title">{item.title}</Card.Title>
                    <Card.Text className="product-price">{item.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
                ))
              }
              
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Products;