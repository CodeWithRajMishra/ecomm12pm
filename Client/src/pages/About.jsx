import React from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'
import aboutLayout from '../assets/images/pc_layout.png'

const About = () => {
  return (
    <>
      <>
      <div className="brand_color">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="titlepage">
                        <h2>about</h2>
                    </div>
                </div>
            </div>
        </div>

    </div>


<div className="about">
   <div className="container">
      <div className="row">
         <dir className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about_box">
               <figure><img src={aboutLayout}/></figure>
            </div>
         </dir>
          <dir className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about_box">
               <h3>Who is Lighten</h3>
               <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
               <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
         </dir> 
      </div>
   </div>
</div>
      
      </>
    </>
  )
}

export default About