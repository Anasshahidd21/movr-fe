import { MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import "./TemplateRegistration.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import fire from "../../firebase";
import RegModel from "./RegModel";
import { inputProps, userData } from "./RegistrationInterfaces";
require("firebase/auth");

const Template = ({ formData, title, message }: inputProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const user = fire.auth().currentUser;
  const history = useHistory();

  let emitter: RegModel | undefined;

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

  const flipTemplate = (title: String) => {
    history.push(title === "Sign Up" ? "/login" : "/signup");
  };

  const onSubmit = async (
    event: React.SyntheticEvent<HTMLButtonElement, Event>
  ) => {
    try {
      event.preventDefault();
      emitter = new RegModel();
      console.log(emitter, "emitting");
      setErrorMessage("");
      const data: userData = {
        email: email,
        password: password,
      };
      emitter.fireOnSignUp(data);
    } catch (e) {
      setErrorMessage(e.message);
      console.log(e);
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
                      value={data.inputType === "email" ? email : password}
                      label={data.label}
                      group
                      type={data.inputType}
                      placeholder={data.inputPlaceHolder}
                      onChange={(val) => onChange(data, val)}
                    />
                  );
                })}
              </div>
              <div className="text-center py-4 mt-3">
                <p className="message" onClick={() => flipTemplate(title)}>
                  {" "}
                  {message}{" "}
                </p>
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
