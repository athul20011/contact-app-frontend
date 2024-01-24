import React,{useState} from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Add.css'
import {Row,Col} from 'react-bootstrap'

function Add() {
  const location = useNavigate()

  const [id,setId]=useState("")
  const [username,setUsername]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const [street,setStreet]=useState("")
  const [city,setCity]=useState("")

  const base_url='http://localhost:7000/add-an-contacts'

const addContacts=async(e)=>{
  console.log(id,username,phone,email,street,city);

  const body={id,username,phone,email,street,city}
  const result = await axios.post(base_url,body).then((result)=>{
    console.log(result);
    alert(result.data.message)
    location('/')
  }).catch((error)=>{
    alert("Please enter a unique contact id")
  })

}
  return (
    <div className='ab'>
      <div className="container text-center ">
        <h2 className='p-5'>Add New Contact</h2>
        <Row>
          <Col>
          <img src="https://moya.app/wp-content/uploads/2021/08/voice-notes.png" alt="" />
          </Col>
          <Col>
          <MDBInput label='ID' onChange={(e)=>setId(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Username' onChange={(e)=>setUsername(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Phone' onChange={(e)=>setPhone(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Email' onChange={(e)=>setEmail(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Street' onChange={(e)=>setStreet(e.target.value)} id='form1' type='text' />
        <br />
        <MDBInput label='City' onChange={(e)=>setCity(e.target.value)} id='form1' type='text' />
        <br />
        <div>
          <button className='btn btn-success  m-3' onClick={(e)=>addContacts(e)}>Add<i class="fa-solid fa-user-plus"></i></button>
        </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Add