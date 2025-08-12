import GoogleAuthButton from "./GoogleAuthButton";

const FormTop = ({ data }) => {
  return (
    <>
      <div className="logo">
        <img src="/icon.png" alt="logo" />
      </div>

      <h2>{data.message}</h2>

      <GoogleAuthButton data={data} />

    </>
  );
};

export default FormTop;
