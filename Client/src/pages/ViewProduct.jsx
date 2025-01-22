import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import p1 from '../assets/images/icon/p1.png';
import p2 from '../assets/images/icon/p2.png';
import p3 from '../assets/images/icon/p3.png';
import p4 from '../assets/images/icon/p4.png';
import p5 from '../assets/images/icon/p5.png';
import p6 from '../assets/images/icon/p6.png';
import p7 from '../assets/images/icon/p7.png';

const ViewProduct = () => {
    const {id} = useParams();

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

    const filteredData = data.filter(item => item.id == id)

  return (
    <Container >
        {filteredData.map(item => (
            <Row key={item.id} className="justify-content-center">
                <Col  style={{display: 'flex', justifyContent: 'center'}}>
                    <Card className="text-center justify-content-center m-3 " style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={item.img} alt={item.title} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                Price: {item.price}
                            </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        ))}
    </Container>
  )
}

export default ViewProduct