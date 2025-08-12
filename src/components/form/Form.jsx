import "./form.css";
import FormBottom from "./FormBottom";
import FormTop from "./FormTop";

const Form = ({
  filed,
  data,
  userData,
  handleFormChange,
  handleSubmit,
  formErrors,
}) => {
  return (
    <div className="container">
      <div className="form-box">
        <FormTop data={data} />
        <div className="divider">
          <span>or</span>
        </div>
        <FormBottom
          data={data}
          filed={filed}
          userData={userData}
          handleFormChange={handleFormChange}
          handleSubmit={handleSubmit}
          formErrors={formErrors}
        />
      </div>
    </div>
  );
};

export default Form;
