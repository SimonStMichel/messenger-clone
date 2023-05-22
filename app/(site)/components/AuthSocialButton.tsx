// React Icons
import { IconType } from "react-icons";

interface AuthSocialButtonProps{
    icon: IconType,
    onClick: () => void,
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({icon : Icon, onClick}) => {
  return (
    <button className="btn-auth-social" type="button" onClick={onClick}>
        <Icon/>
    </button>
  )
}

export default AuthSocialButton;