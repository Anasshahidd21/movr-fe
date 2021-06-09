import { MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import "./TemplateRegistration.css";
import React, { useState } from "react";
import fire from "../../firebase";
require("firebase/auth");

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

  const onChange = async (data: any, val: any) => {
    switch (data.inputType) {
      case "password":
        setErrorMessage("");
        setPassword(val.target.value);
        break;
      case "email":
        setErrorMessage("");
        setEmail(val.target.value);
        break;
      default:
    }
  };

  const onSubmit = async (
    event: React.SyntheticEvent<HTMLButtonElement, Event>
  ) => {
    try {
      event.preventDefault();
      setErrorMessage("");
      await fire
        .auth()
        .createUserWithEmailAndPassword(email, password);
    } catch (e) {
      setErrorMessage(e.message);
      console.log(errorMessage);
    }
  };

  return (
    <div className="registration-component">
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
                      label={data.label}
                      group
                      value = {data.inputType==="email" ? email : password}
                      type={data.inputType}
                      placeholder={data.inputPlaceHolder}
                      onChange={(val) => onChange(data, val)}
                    />
                  );
                })}
              </div>
              <div className="text-center py-4 mt-3">
                <p className="message">{message}</p>
                <MDBBtn
                  color="cyan"
                  type="submit"
                  onClick={(
                    event: React.SyntheticEvent<HTMLButtonElement, Event>
                  ) => onSubmit(event)}
                >
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
