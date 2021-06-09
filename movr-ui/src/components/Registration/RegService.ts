<<<<<<< HEAD
import { globalEvent } from "@billjs/event-emitter";
import { EventEmitter } from "events";
import fire from "../../firebase";
import RegistrationEmitters from "./RegistrationEmitters";
=======
import fire from "../../firebase";
>>>>>>> 149a9bc... added the functionality to signup more abstractly
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
export class regService extends RegistrationEmitters {
  protected listenOnSignUp = () => {
    console.log("inside here?");
    this.onDidSignUpEmitter.on(this.SIGNUP, async ({ email, password }) => {
      await signUpUser({ email, password });
    });
  };

  protected listenOnSignIn = () => {
    this.onDidSignInEmitter.on(this.SIGNIN, async ({ email, password }) => {
      await signInUser({ email, password });
    });
  };
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
}
