import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

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
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">{title}</p>
                <div className="grey-text">
                  {formData.map((data: any, i: any) => {
                    return (
                      <MDBInput
                        label={data.label}
                        group
                        type={data.inputType}
                        placeholder={data.inputPlaceHolder}
                      />
                    );
                  })}
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    {title}
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Template;

// const Template = ({ formData, title, message }: inputProps) => {
//   return (
//     <div>
//       <form>
//         <h3>{title}</h3>
//         {formData.map((data: any, i: any) => {
//           return (
//             <div className="form-group" key={i}>
//               <label>{data.label}</label>
//               <input
//                 type={data.inputType}
//                 className="form-control"
//                 placeholder={data.inputPlaceHolder}
//               ></input>
//             </div>
//           );
//         })}
//         <button type="submit" className="btn btn-primary btn-block">
//           {title}
//         </button>
//         <p className="forgot-password text-right">{message}</p>
//       </form>
//     </div>
//   );
// };
