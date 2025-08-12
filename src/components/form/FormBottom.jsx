import { Fragment } from "react";

const FormBottom = ({
  data,
  filed,
  handleSubmit,
  handleFormChange,
  userData,
  formErrors,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {filed.map((item, index) => (
          <Fragment key={index}>
            {formErrors[item.name] && (
              <p className="error">{formErrors[item.name]}</p>
            )}
            <input
              type={item.type}
              name={item.name}
              placeholder={item.placeHolder}
              onChange={handleFormChange}
              value={userData[item.name]}
            />
          </Fragment>
        ))}

        {/* {formErrors &&
          formErrors.map((item, index) => {
            return (
              <p key={index} className="error">
                {item.error}
              </p>
            );
          })} */}
        <div className="options">
          <label>
            <input type="checkbox" required /> {data.optionMessage}
          </label>
          {data.showForgetPassword && <a href="#">Lost your password?</a>}
        </div>

        <button type="submit" className="btn sign-in">
          {data.title}
        </button>
      </form>

      <p className="terms">
        <span>{data.termsMessage} </span>
        <a href={data.url}>{data.urlTitle}</a>
      </p>
    </>
  );
};

export default FormBottom;
