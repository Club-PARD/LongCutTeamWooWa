import GoogleButton from "react-google-button";
import { handleGoogleLogin } from "../../../service/providers/auth_provider";

const CustomGoogleBtn = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
      <GoogleButton type="white" onClick={handleGoogleLogin}/>
    </div>
  );
}

export default CustomGoogleBtn;