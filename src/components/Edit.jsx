import React,{ useEffect, useState }  from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {Row,Col} from 'react-bootstrap'
function Edit() {
   const [cid,setId]=useState("")
   const [conusername,setUsername]=useState("")
   const [conphone,setPhone]=useState("")
   const [conemail,setEmail]=useState("")
   const [constreet,setStreet]=useState("")
   const [concity,setCity]=useState("")

     const {id}=useParams()
     console.log(id);//4
 
   const viewCon=async(id)=>{
     const result = await axios.get(`${base_url}/view-an-contacts/${id}`)
     console.log(result.data.contacts);//object
     setId(result.data.contacts.id)
     setUsername(result.data.contacts.username)
     setPhone(result.data.contacts.phone)
     setEmail(result.data.contacts.email)
     setStreet(result.data.contacts.street)
     setCity(result.data.contacts.city)
   }
   useEffect(()=>{
     viewCon(id)
   },[])
 
   const location= useNavigate()
 
 //update function
     const base_url='http://localhost:7000'
     //api call to update an employee details
     const updateContact=async(e)=>{
       e.preventDefault()
       const body={
         id:cid,
         username:conusername,
         phone:conphone,
         email:conemail,
         street:constreet,
         city:concity
       }
         const result= await axios.post(`${base_url}/update-an-contacts/${id}`,body)
         console.log(result);
         alert(result.data.message)
         location('/')
     }
  return (
    <div >
      <div className="container text-center m-5">
        <h2>Edit contact</h2>
        <Row>
          <Col>
          <img src="https://cdn-icons-png.flaticon.com/512/938/938916.png" style={{width:"x"}} alt="" />
          </Col>
          <Col>
          <form className='p-5'>
      <MDBInput onChange={(e)=>setId(e.target.value)} value={cid} label='ID' id='formControlLg' type='text' size='lg' readOnly />
        <br />
      <MDBInput onChange={(e)=>setUsername(e.target.value)} value={conusername} label='Username' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setPhone(e.target.value)}  value={conphone}  label='phone' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setEmail(e.target.value)} value={conemail}  label='email' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setStreet(e.target.value)} value={constreet} label='Street' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setCity(e.target.value)} value={concity} label='city' id='formControlLg' type='text' size='lg' />
      <br />
      <div>
        <button onClick={(e)=>updateContact(e)} className='btn btn-success m-3'>Update <i className='fa-solid fa-user'></i></button>
      </div>
        </form>
          </Col>
        </Row>
      </div> 
    </div>
  )
}

export default Edit