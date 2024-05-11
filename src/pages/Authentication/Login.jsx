import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';
import './Auth.css'

import { useRef } from 'react';
import axios from 'axios';
import { signin } from '../../apis/fakeStoreProdApis';
import { useCookies } from 'react-cookie';

function Login(){

    const navigate = useNavigate();
    const [token, setToken] = useCookies(['jwt-token'])
    const authRef = useRef(null);
    async function onAuthFormSubmit(formDetails) {
        try {
           const response=  await axios.post(signin(), {
                username: formDetails.username,
                email: formDetails.email,
                password: formDetails.password
            });
          setToken('jwt-token', response.data.token)
            navigate('/')
        } catch (error) {
            authRef.current.resetFormData()
            console.log(error);
        }
    }
    return (
        <div className="container" style={{minHeight:'100vh', display:"flex", flexDirection:"column"}}>
        <div className="row">
            <h2 className="home-title text-center">
                Welcome to Shop Cart
            </h2>
        </div>
        <div className="login-wrapper" id="loginForm">
            <h4 className="text-center">LogIn</h4>
            <Auth onSubmit={onAuthFormSubmit} ref={authRef} />
            <div className="signup-btn text-center " id="showSignupbtn"><Link to='/signup'>Don't have an account? SignUp here</Link></div>
        </div>
    </div>
    )
}
export default Login;