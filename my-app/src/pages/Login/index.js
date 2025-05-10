import { useDispatch } from "react-redux";
import { setCookie } from "../../helpers/cookie";
import { login } from "../../services/userService";
import "./Login.scss"
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../../actions/login";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const response = await login(email, password);
        if(response.length > 0){
            setCookie("id", response[0].id, 1);
            setCookie("fullName", response[0].fullName, 1);
            setCookie("email", response[0].email, 1);
            setCookie("token", response[0].token, 1);
            dispatch(checkLogin(true));
            navigate("/");
        }else {
            alert("dang nhap that bai!");
        }
    }

    return (
        <div className="main_login">
            <div className="Login"> 
                <h2 className="Login__title">Login Quiz</h2>
                <form className="Login__form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="email" placeholder="Email" className="form-input" name="email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" className="form-input" name="password"/>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                
            </div>
        </div>
    )
}

export default Login;