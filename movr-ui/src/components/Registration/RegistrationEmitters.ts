import { EventEmitter } from "events";
import { userData } from "./RegistrationInterfaces";

export default class RegistrationEmitters {
  protected onDidSignUpEmitter: EventEmitter;
  protected onDidSignInEmitter: EventEmitter;

  constructor() {
    this.onDidSignUpEmitter = new EventEmitter();
    this.onDidSignInEmitter = new EventEmitter();
  }

  protected SIGNUP = "SIGNUP";
  protected SIGNIN = "SIGNIN";

  fireOnSignUp = (data: userData) => {
    console.log(data, "calling signup");
    this.onDidSignUpEmitter?.emit(this.SIGNUP, data);
  };

  fireOnSignIn = (data: userData) => {
    console.log(data, "calling sign in ");
    this.onDidSignInEmitter?.emit(this.SIGNIN, data);
  };
}
