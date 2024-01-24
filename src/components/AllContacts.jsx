import React,{ useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import './AllContacts.css'


function AllContacts() {
  const base_url='http://localhost:7000'
  const location=useNavigate()

  const [allcontact,setAllcontact]=useState([])

  const fetchData=async()=>{
    const result = await axios.get(`${base_url}/get-all-contacts`)
    console.log(result.data.contacts);
    setAllcontact(result.data.contacts)
  }
console.log(allcontact);


const deleteContact=async(id)=>{
  const result = await axios.delete(`${base_url}/delete-an-contacts/${id}`)
  console.log(result);
  alert(result.data.message)
  fetchData()
}
const viewCon=async(id)=>{
  const result=await axios.get(`${base_url}/view-an-contacts/${id}`)
  console.log(result);
  location(`view/${id}`)
}
  useEffect(()=>{
    fetchData()
  },[])

  return (
    
    <div className='neww bg'>
      <h1 className='text-center text-light p-4'>Welcome to contact app</h1>
      <p className='text-light m-2 p-3'>A contact manager is a software program that enables users to easily store and find contact information, such as names, addresses, and telephone numbers. They are contact-centric databases that provide a fully integrated approach to tracking all information and communication activities linked to contacts. Simple ones for personal use are included in most smartphones. The main reference standard for contact data and metadata, semantic and interchange, is the vCard.</p>
<img src="https://akenda.vn/wp-content/uploads/2021/01/contact-us-1024x884.png" style={{width:'30%',marginLeft:'35%',marginBottom:'10px',marginTop:'-40px'}} alt="" />
      <h1 className='text-light text-center'>☎️LIST OF CONTACTS</h1>
        <Link to={'/add'}>
        <a className='m-5 ' style={{float:'right',padding:'10px'}} href="">
        <img  src="https://cdn2.iconfinder.com/data/icons/user-people-4/48/8-256.png" alt=""style={{width:'50px'}} />
        </a>
        </Link>
        <Row>
        {
            allcontact.map((item)=>(
        <Col sm={12} md={6} lg={4} xl={3} >

        <Card className='cards m-5   ' style={{width:'19rem',display: 'flex',boxShadow:'0   4px 4px white ',textAlign:'center'}}>
            <img  src="https://www.pngkit.com/png/full/128-1280585_user-icon-fa-fa-user-circle.png" alt=""style={{width:'100px', marginLeft:'100px',marginTop:'20px'}} />
      <Card.Body className='text-center '>
        <Card.Title>👤Name:{item.username}</Card.Title>
        <Card.Text>📞Phone:{item.phone}</Card.Text>
        {/* <Card.Text>Email:{item.email}</Card.Text>
        <Card.Text>Street:{item.street}</Card.Text>
        <Card.Text>City:{item.city}</Card.Text> */}
        <Link to={`concard/${item.id}`}>
        <Button className='bg-primary'>view contact</Button>
        </Link>
      </Card.Body>
      <img src="https://gcorp-theicon.com/img/call.gif" style={{width:"90px",marginLeft:'105px'}} alt="" />

      <div className='m-3 '>
      <i onClick={()=>deleteContact(item.id)} className='fa-solid fa-trash text-danger'></i>

      <Link to={`edit/${item.id}`} style={{marginLeft:'80%'}} >
             <i className='fa-solid fa-pen text-primary'></i><br />
            </Link>
      </div>
      
    </Card>
    </Col>

 ))

}
</Row>
         
        
    </div>
  )
}

export default AllContacts