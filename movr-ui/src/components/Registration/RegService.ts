import { globalEvent } from "@billjs/event-emitter";
import { EventEmitter } from "events";
import fire from "../../firebase";
import RegistrationEmitters from "./RegistrationEmitters";
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

export class regService extends RegistrationEmitters {
  protected listenOnSignUp = () => {
    this.onDidSignUpEmitter.on(this.SIGNUP, async ({ email, password }) => {
      await signUpUser({ email, password });
    });
  };

  protected listenOnSignIn = () => {
    this.onDidSignInEmitter.on(this.SIGNIN, async ({ email, password }) => {
      await signInUser({ email, password });
    });
  };
}
