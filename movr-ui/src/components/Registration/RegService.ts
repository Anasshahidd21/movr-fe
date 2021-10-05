import fire from "../../firebase";
import RegistrationEmitters from "./RegistrationEmitters";
import { userData } from "./RegistrationInterfaces";

export class regService extends RegistrationEmitters {
  protected emitter: RegistrationEmitters | undefined;
  private errorMessage: string;

  constructor() {
    super();
    this.init();
    this.errorMessage = "";
  }

  getErrorMessage = () => this.errorMessage;
  setErrorMessage = (message: string) => (this.errorMessage = message);
  resetErrorMessage = () => (this.errorMessage = "");

  protected init = () => {
    this.onDidSignUpEmitter?.on(this.SIGNUP, async ({ email, password }) => {
      await this.signUpUser({ email, password });
    });

    this.onDidSignInEmitter.on(this.SIGNIN, async ({ email, password }) => {
      await this.signInUser({ email, password });
    });
  };

  private async signInUser({ email, password }: userData): Promise<void> {
    try {
      await fire.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      this.setErrorMessage(e.message);
    }
  }

  private async signUpUser({ email, password }: userData): Promise<void> {
    try {
      await fire.auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      this.setErrorMessage(e.message);
    }
  }
}
