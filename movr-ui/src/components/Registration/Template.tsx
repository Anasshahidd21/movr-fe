import { MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import "./TemplateRegistration.css";
import React, { useEffect, useState } from "react";
import fire from "../../firebase";
import { signUpUser } from "./RegService";
import { globalEvent } from "@billjs/event-emitter";
import RegistrationEmitters from "./RegistrationEmitters";
require("firebase/auth");
export interface IformData {
  label: string;
  inputType: string;
  inputPlaceHolder: string;
}

interface inputProps {
  title: string;
  message: string;
  formData: IformData[];
}

export interface userData {
  email: string;
  password: string;
}

const Template = ({ formData, title, message }: inputProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const user = fire.auth().currentUser;

  let emitter: RegistrationEmitters | undefined;

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
      emitter = new RegistrationEmitters();
      console.log(emitter, "emitting");
      event.preventDefault();
      emitter = new RegistrationEmitters();
      console.log(emitter, "emitting");
      setErrorMessage("");
      console.log("we here");
      const data: userData = {
        email: "email@email.com",
        password: "password123",
      };
      console.log(email);
      console.log(password);
      // emitter.fireOnSignUp(data);
      // const data: userData = { email, password };
      // console.log(email);
      // console.log(password);
      emitter.fireOnSignUp(data);
      // console.log(emitter.SIGNUP);
      // const signIn = await signUpUser({ email, password });
      // if (signIn) {
      //   setErrorMessage("success");
      // }
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
