import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginGoogle } from "../../features/auth/authSlice";

const CustomGoogleButton = ({ data }) => {
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    flow: "auth-code",
    scope: "openid email profile",
    onSuccess: async (codeResponse) => {
      const { code } = codeResponse;

      try {
        const response = await dispatch(loginGoogle(code)).unwrap();
        toast.success("Google login success");
      } catch (error) {
        toast.error("Login failed");
      }
    },
    onError: () => {
      toast.error("Google login failed");
    },
  });

  return (
    <button onClick={() => login()} className="btn">
      <img src="/google.png" alt="google logo" />
      <span>{data.googleMessage}</span>
    </button>
  );
};

export default CustomGoogleButton;
