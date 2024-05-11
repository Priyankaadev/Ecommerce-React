import './Auth.css'
import Auth from '../../components/Auth/Auth';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signup } from '../../apis/fakeStoreProdApis';
import { useState } from 'react';


function Signup() {

    const navigate = useNavigate();
    const [resetSignupForm, setResetSignupForm] = useState(false)

    async function onAuthFormSubmit(authArguments) {
        try {
            await axios.post(signup(), {
                username: authArguments.username,
                email: authArguments.email,
                password: authArguments.password
            });
            navigate('/signin')
        } catch (error) {
            console.log(error);
         
            setResetSignupForm(true)
        }
    }

    return (
        <div className="container" style={{ minHeight: '100vh', display: "flex", flexDirection: "column" }}>
            <div className="row">
                <h2 className="home-title text-center">
                    Welcome to Shop Cart
                </h2>
            </div>
            <div className="login-wrapper" id="loginForm">
                <h4 className="text-center">SignUp</h4>
                <Auth
                    onSubmit={onAuthFormSubmit}
                    resetForm={resetSignupForm}
                />
                <div className="signup-btn text-center " id="showSignupbtn"><Link to='/signin'>Already have an account? SignIn here</Link></div>
            </div>
        </div>
    )
}
export default Signup;