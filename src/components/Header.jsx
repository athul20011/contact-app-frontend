import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
        <MDBNavbar className=''>
      <MDBContainer fluid>
<img src="https://www.freeiconspng.com/uploads/contacts-icon-7.png" style={{width:'50px'}} alt="" />
      {/* <i class="fa-regular fa-address-book" style={{color:'white',fontSize:'40px'}}></i> */}
        <MDBNavbarBrand className='text-dark' style={{marginRight:'60%'}}>CONTACT APP</MDBNavbarBrand>
        <MDBInputGroup tag="form" className='d-flex w-auto '>
        <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='search contact' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header