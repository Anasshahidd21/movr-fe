<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 392a674... event emitters added
import { globalEvent } from "@billjs/event-emitter";
import { EventEmitter } from "events";
import fire from "../../firebase";
import RegistrationEmitters from "./RegistrationEmitters";
<<<<<<< HEAD
=======
import fire from "../../firebase";
>>>>>>> 149a9bc... added the functionality to signup more abstractly
=======
>>>>>>> 392a674... event emitters added
import { userData } from "./Template";

export async function signUpUser({
  email,
  password,
}: userData): Promise<string | undefined> {
  try {
    await fire.auth().createUserWithEmailAndPassword(email, password);
  } catch (e) {
    return e.message;
  }
}

export async function signInUser({
  email,
  password,
}: userData): Promise<string | undefined> {
  try {
    await fire.auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    return e.message;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
export class regService extends RegistrationEmitters {
  protected listenOnSignUp = () => {
    console.log("inside here?");
=======
export class regService extends RegistrationEmitters {
  protected listenOnSignUp = () => {
<<<<<<< HEAD
>>>>>>> 392a674... event emitters added
=======
    console.log("inside here?");
>>>>>>> e70a359... resolve class dependency
    this.onDidSignUpEmitter.on(this.SIGNUP, async ({ email, password }) => {
      await signUpUser({ email, password });
    });
  };

  protected listenOnSignIn = () => {
    this.onDidSignInEmitter.on(this.SIGNIN, async ({ email, password }) => {
      await signInUser({ email, password });
    });
  };
<<<<<<< HEAD
=======
export class regService {
  //   private context: Context | undefined;
  //   constructor() {
  //     this.initContext();
  //   }
  //   initContext() {
  //     this.context = createContext<IformData[] | undefined>(undefined);
  //   }
  //   getContext() {
  //     return this.context;
  //   }
  //   setContext(c: Context | undefined) {
  //     this.context = c;
  //   }
>>>>>>> 149a9bc... added the functionality to signup more abstractly
=======
>>>>>>> 392a674... event emitters added
}
