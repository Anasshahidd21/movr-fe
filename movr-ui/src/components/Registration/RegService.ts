import fire from "../../firebase";
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
}
