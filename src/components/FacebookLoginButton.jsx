import { FacebookAuth } from "./FireBase";
import { useNavigate } from "react-router-dom";

export default function FacebookLoginButtons() {
  const navigate = useNavigate();
  const responseFacebook = async () => {
    try {
      const user = await FacebookAuth();
      console.log("Facebook login user -->", user);
      const { uid, displayName, email, photoURL } = user;
      localStorage.setItem(
        "data",
        JSON.stringify({ uid, name: displayName, email, photoURL })
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button class="loginBtn loginBtn--facebook" onClick={responseFacebook}>
        Login with Facebook
      </button>
    </div>
  );
}
