import { MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import "./TemplateRegistration.css";

interface IformData {
  label: string;
  inputType: string;
  inputPlaceHolder: string;
}

interface inputProps {
  title: string;
  message: string;
  formData: IformData[];
}

const Template = ({ formData, title, message }: inputProps) => {
  return (

  <div className='registration-component'>
    <div className="registrationAlignment">
      <MDBCard>
        <MDBCardBody>
          <form>
            <p className="h4 text-center py-4">{title}</p>
            <div className="grey-text">
              {formData.map((data: any, i: any) => {
                return (
                  <MDBInput
                    key={i}
                    label={data.label}
                    group
                    type={data.inputType}
                    placeholder={data.inputPlaceHolder}
                  />
                );
              })}
            </div>
            <div className="text-center py-4 mt-3">
              <p className="message">{message}</p>
              <MDBBtn color="cyan" type="submit">
                {title}
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </div>
    </div>
  );
};

export default Template;
