import { MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import "./TemplateRegistration.css";
import React, { useState } from "react";
import fire from "../../firebase" 
require('firebase/auth');



interface IformData {
  label: string;
  inputType: string;
  inputPlaceHolder: string;
}

interface inputProps {
  title: string;
  message: string;
  formData: IformData[];
}

const Template = ({ formData, title, message }: inputProps) => {

  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const user = fire.auth().currentUser;

  const onChange = async(data: any) => {

    switch (data.inputType) {
      case "password":
        setErrorMessage("");
        setPassword(data.value);
        break;
      case "email":
        setErrorMessage("");
        setEmail(data.value);
        break;
      default:
    }
  }

  const onSubmit = async() => {
    try {
      setErrorMessage("");
      fire.auth().createUserWithEmailAndPassword("sanihaseeb@hotmail.ca", "hello");
    } catch (e) {
      setErrorMessage(e.message);
    }
  };


  return (

  <div className='registration-component'>
    <div className="registrationAlignment">
      <MDBCard>
        <MDBCardBody>
          <form>
            <p className="h4 text-center py-4">{title}</p>
            <div className="grey-text">
              {formData.map((data: any, i: any) => {
                return (
                  <MDBInput
                    key={i}
                    value = {data.inputType === 'email' ? email : password}
                    label={data.label}
                    group
                    type={data.inputType}
                    placeholder={data.inputPlaceHolder}
                    onChange={() => onChange(data)}
                  />
                );
              })}
            </div>
            <div className="text-center py-4 mt-3">
              <p className="message">{message}</p>
              <MDBBtn color="cyan" type="submit" onClick={onSubmit}>
                {title}
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </div>
    </div>
  );
};

export default Template;
