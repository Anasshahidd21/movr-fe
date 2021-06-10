export interface IformData {
  label: string;
  inputType: string;
  inputPlaceHolder: string;
}

export interface inputProps {
  title: string;
  message: string;
  formData: IformData[];
}

export interface userData {
  email: string;
  password: string;
}
