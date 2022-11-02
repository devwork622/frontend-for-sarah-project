import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBInputGroup
}
  from 'mdb-react-ui-kit';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './style.scss';
import CountrySelector from '../../components/CountrySelector';
import { useDispatch, useSelector } from "react-redux"


const SignIn = () => {
  const baseURL = "http://localhost/email";
  const [justifyActive, setJustifyActive] = useState('tab2');
  const [email, setEmail] = useState("");
  const [phoneValue, setPhoneValue] = useState('');
  const storeValue = useSelector((store) => store);
  const countryCode = storeValue.CountryCodeReducer.country_code;
  let displayVerificationPhoneCode, phoneVerificationClass;

  if (countryCode == "us" || countryCode == "ca" || countryCode == "gb") {
    displayVerificationPhoneCode = <MDBInput wrapperClass='mb-4' label='Phone Verification Code' id='v_phone' type='text' />
    phoneVerificationClass = "d-block";
  }
  else {
    displayVerificationPhoneCode = "";
    phoneVerificationClass = "d-none";
  }

  const emailVerify = () => {    
    axios
      .post(baseURL, {
        body: email,
      })
      .then((res) => {
        setPost(res.data);
      });
  }

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign up with:</p>

            <p className="text-center mt-3">or:</p>
          </div>
          
          <MDBInputGroup className='mb-4'>
            <input className='form-control' placeholder="Email" id='email' type='email' onChange={e => { setEmail(e.target.value) }} />
            <MDBBtn outline onClick={emailVerify}>Verify</MDBBtn>
          </MDBInputGroup>
          <MDBInput wrapperClass='mb-4' label='Email Verification Code' id='v_email' type='text' />          
          <div className='mb-4'>
            <CountrySelector />
          </div>
          <div className='d-flex mb-4'>
            <PhoneInput country={countryCode} value={phoneValue} onChange={e => { setPhoneValue(e) }} />
            <MDBBtn outline className={phoneVerificationClass}>Verify</MDBBtn>
          </div>

          <div className='mb-4'>
            {displayVerificationPhoneCode}
          </div>


          <div className='d-flex  mb-4' >
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default SignIn;