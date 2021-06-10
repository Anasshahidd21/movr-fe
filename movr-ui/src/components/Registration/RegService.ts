import fire from "../../firebase";
import RegistrationEmitters from "./RegistrationEmitters";
import { userData } from "./RegistrationInterfaces";

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
  protected emitter: RegistrationEmitters | undefined;

  constructor() {
    super();
    this.init();
  }

  protected init = () => {
    this.onDidSignUpEmitter?.on(this.SIGNUP, async ({ email, password }) => {
      await signUpUser({ email, password });
    });

    this.onDidSignInEmitter.on(this.SIGNIN, async ({ email, password }) => {
      await signInUser({ email, password });
    });
  };

  private async signInUser({
    email,
    password,
  }: userData): Promise<string | undefined> {
    try {
      await fire.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      return e.message;
    }
  }

  private async signUpUser({
    email,
    password,
  }: userData): Promise<string | undefined> {
    try {
      await fire.auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      return e.message;
    }
  }
}
