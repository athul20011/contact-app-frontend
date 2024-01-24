import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import {Row,Col} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ConCard.css'

function ConCard() {
  const [viewCon,setviewCon]=useState({})
  const {id}=useParams()
  console.log(id);
  const base_url='http://localhost:7000'

  const viewdata=async(id)=>{
    const result =await axios.get(`${base_url}/view-an-contacts/${id}`)
    console.log(result.data.contacts);
    setviewCon(result.data.contacts)
    
  }
  console.log(viewCon);
  useEffect(()=>{
    viewdata(id)
  },[])
  return (
    <Row className='img'>
      <Col>
      <div style={{borderRadius:'10px',padding:'20px',marginTop:'50px',}}>
      <MDBCard className='shadow card' style={{border:'10px',borderRadius:'20px'}}>
      <MDBCardBody>
      <img src="https://cdn3.iconfinder.com/data/icons/mobile-apps-18/64/21._contact-512.png" style={{width:"50px"}} alt="" />

        <MDBCardTitle><h2 className='text-dark'>Condact details</h2></MDBCardTitle>
        <MDBCardText className='text-dark'>
          <h5>🆔ID :{viewCon.id}</h5>
          <h5>👤Name :{viewCon.username}</h5>
          <h5>☎️Phone :{viewCon.phone}</h5>
          <h5>📧Email:{viewCon.email}</h5>
          <h5>📍STREET :{viewCon.street}</h5>
          <h5>🌁City :{viewCon.city}</h5>
          <Link to={'/'}>
          <button className='btn btn-dark px-3 '>Back</button>
          </Link>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </div>
      </Col>

      <Col>
      <img src="https://th.bing.com/th/id/R.d8fd3e5bc9383dc76ab736b3ea9c71a0?rik=ULgx8oAgAKWzYw&riu=http%3a%2f%2fwww.sendhamarai.co.in%2fimages%2fcontact-us.png&ehk=xa76q7hrJRCEn4eQyft38NB9a8dm8Xty4Qx3r%2fUBV34%3d&risl=&pid=ImgRaw&r=0" style={{width:'80%',marginTop:'20px'}} alt="" />
      </Col>
    </Row>
    
  )
}

export default ConCard