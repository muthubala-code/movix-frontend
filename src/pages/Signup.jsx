import { useDispatch } from "react-redux";
import Form from "../components/form/Form";
import { signupData, signupFiled } from "../components/form/signup";
import { useNavigate } from "react-router-dom";
import { register } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { useState } from "react";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleFormChange = (event) =>
    setUserData({ ...userData, [event.target.name]: event.target.value });

  const [formErrors, setFormErrors] = useState({});
  const formValidation = () => {
    const errors = {};

    if (!userData.username.trim()) {
      errors.username = "Username should not be empty";
    }
    if (!userData.email.trim()) {
      errors.email = "Email should not be empty";
      return errors;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.email = "Invalid email format";
      return errors;
    }

    if (!userData.password.trim()) {
      errors.password = "Blank Password is not required";
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
      const result = await dispatch(register(userData)).unwrap();
      navigate("/");
      toast.success(result.message);
    } catch (err) {
      const apiErrors = err.errors.reduce((acc, item) => {
        acc[item.filed] = item.message;
        return acc;
      }, {});
      setFormErrors(apiErrors);
      toast.error("Signup Failed");
    }
  };
  return (
    <Form
      filed={signupFiled}
      data={signupData}
      userData={userData}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
      formErrors={formErrors}
    />
  );
};

export default Signup;
