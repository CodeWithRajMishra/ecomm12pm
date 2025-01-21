import React from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'
import aboutLayout from '../assets/images/pc_layout.png'

const About = () => {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center" style={{backgroundColor:"rgb(255, 215, 0)", padding:"60px"}}>
          <Col md={12} className="text-center">
            <h1 style={{color:"black", fontWeight:"bold",fontSize:"50px"}}>ABOUT</h1>
          </Col>
        </Row>

        <Row  style={{marginTop:"50px", marginBottom:"50px",display:"flex", justifyContent:"space-around"}}>
          <Col md={6} style={{display:"flex", justifyContent:"center"}} >
         
              <Figure.Image
                src={aboutLayout}
                style={{ width: '80%' }}
                alt="about us"
              />
          </Col>
          <Col md={6}>
            <h3 style={{fontSize:"30px"}}>Who is Lighten</h3>
            <p style={{fontSize:"20px"}}>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum.
            </p>
            <p style={{fontSize:"20px"}}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About