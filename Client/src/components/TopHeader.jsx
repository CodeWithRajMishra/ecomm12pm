import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const TopHeader = () => {
  const [username, setUsername]= useState("");
  const [useremail, setUserEmail]= useState("");
  const [isLogin, setIsLogin]= useState(false);
  const navigate= useNavigate();

  useEffect(()=>{
    setUsername(localStorage.getItem("username"));
    setUserEmail(localStorage.getItem("useremail"));
  }, []);

  useEffect(()=>{
    setUsername(localStorage.getItem("username"));
    setUserEmail(localStorage.getItem("useremail"));
  }, [isLogin]);



  const userLogout=()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");
    setIsLogin(true);
    navigate("/");
  }

  return(
    <>
    <Container fluid style={{backgroundColor: 'rgb(255, 215, 0)'}}>
    <Row className="justify-content-between align-items-center">
    <Col xs={12} md="auto">
      <div className="d-flex">
        <a href="#" className="mr-3" style={{backgroundColor: 'rgb(255, 215, 0)', padding: '0.5rem', borderRadius: '50%'}}>
          <FaFacebookF size={25} color="black" />
        </a>
        <a href="#" className="mr-3" style={{backgroundColor: 'rgb(255, 215, 0)', padding: '0.5rem', borderRadius: '50%'}}>
          <FaTwitter size={25} color="black" />
        </a>
        <a href="#" className="mr-3" style={{backgroundColor: 'rgb(255, 215, 0)', padding: '0.5rem', borderRadius: '50%'}}>
          <FaInstagram size={25} color="black" />
        </a>
        <a href="#" className="mr-3" style={{backgroundColor: 'rgb(255, 215, 0)', padding: '0.5rem', borderRadius: '50%'}}>
          <FaLinkedin size={25} color="black" />
        </a>
      </div>
    </Col>
    <Col xs={12} md="auto">
      <div className="text-right">
        <p className="text-black" style={{padding: '0.5rem'}}>
          
          {isLogin ? (<>
             my company
          </>) : (
            <>
             Welcome : {username} email : {useremail}    
            
            <button onClick={userLogout}>
            Logout
               </button>  

            </>)
          }

               
          
          </p>
      </div>
    </Col>
  </Row>
    </Container>
    </>
  
)
}
export default TopHeader