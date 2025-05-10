import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { useDispatch } from "react-redux";
import { checkExist, register } from "../../services/userService";
import { generateToken } from "../../helpers/generateToken";

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        const checkExistEmail = await checkExist("email", email);

        if(checkExistEmail.length > 0){
            alert("Email is exist")
        } else {
            const options = {
                fullName: fullName,
                email: email,
                password: password,
                token: generateToken(),
            }
            const response = await register(options);
            if(response){
                navigate("/login");
            }else {
                alert("register false!");
            }
        }
    }

    return (
        <div className="main-register">
            <div className="register">
                <h2 className="register__title">Register Account</h2>
                <form className="register__form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="name" placeholder="Full Name" className="form-input" name="name" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" className="form-input" name="email" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" className="form-input" name="password" />
                    </div>
                    <button type="submit" className="register-btn">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;