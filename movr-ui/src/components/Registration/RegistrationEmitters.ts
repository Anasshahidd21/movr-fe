import { EventEmitter } from "events";
import React, { Component } from "react";
import { userData } from "./Template";

export default class RegistrationEmitters {
  protected readonly onDidSignUpEmitter = new EventEmitter();
  protected readonly onDidSignInEmitter = new EventEmitter();

  protected SIGNUP = "SIGNUP";
  protected SIGNIN = "SIGNIN";

<<<<<<< HEAD
  protected readonly test = this.onDidSignInEmitter.eventNames();

  fireOnSignUp = (data: userData) => {
    console.log(data, "printing data");
    console.log(test);
    this.onDidSignUpEmitter.emit(this.SIGNUP, data);
    console.log(test);
=======
  fireOnSignUp = (data: userData) => {
    console.log(data, "printing data");
    this.onDidSignUpEmitter.emit(this.SIGNUP, data);
>>>>>>> 392a674... event emitters added
  };

  fireOnSignIn = (data: userData) => {
    this.onDidSignInEmitter.emit(this.SIGNUP, data);
  };
}
