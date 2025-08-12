import { useDispatch } from "react-redux";
import Form from "../components/form/Form";
import { signinField, signinData } from "../components/form/signin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleFormChange = (event) =>
    setUserData({ ...userData, [event.target.name]: event.target.value });

  const formValidation = () => {
    const errors = {};
    if (!userData.email.trim()) {
      errors.email = "Email should not be empty";
      return errors;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.email = "Invalid email format";
      return errors;
    }

    if (!userData.password.trim()) {
      errors.password = "Password should not be empty";
      return errors;
    } else if (userData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
      return errors;
    }
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = formValidation();

    if (errors != null) {
      setFormErrors(errors);
      return;
    }
    try {
      const result = await dispatch(login(userData)).unwrap();
      navigate("/");
      await toast.success(result.message);
    } catch (err) {
      if (err.errors) {
        const apiErrors = err.errors.reduce((acc, item) => {
          acc[item.filed] = item.message;
          return acc;
        }, {});
        setFormErrors(apiErrors);
        toast.error("Signin Failed");
      }
      toast.error(err.message || "Signin Failed");
    }
  };

  return (
    <Form
      filed={signinField}
      data={signinData}
      userData={userData}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
      formErrors={formErrors}
    />
  );
};

export default Signin;
