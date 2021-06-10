import { EventEmitter } from "events";
import React, { Component } from "react";
import { userData } from "./Template";

export default class RegistrationEmitters {
  protected readonly onDidSignUpEmitter = new EventEmitter();
  protected readonly onDidSignInEmitter = new EventEmitter();

  protected SIGNUP = "SIGNUP";
  protected SIGNIN = "SIGNIN";

  fireOnSignUp = (data: userData) => {
    console.log(data, "printing data");
    this.onDidSignUpEmitter.emit(this.SIGNUP, data);
  };

  fireOnSignIn = (data: userData) => {
    this.onDidSignInEmitter.emit(this.SIGNUP, data);
  };
}
