import './Auth.css'
import { useContext, useRef } from 'react';
import axios from 'axios';
import { signin } from '../../apis/fakeStoreProdApis';
import { useCookies } from 'react-cookie';
import Auth from '../../components/Auth/Auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import UserContext from '../../context/UserContext'

function Login() {

    const navigator = useNavigate();
    const [token, setToken] = useCookies(['jwt-token'])
    const authRef = useRef(null);
    const {user, setUser} = useContext(UserContext)
    async function onAuthFormSubmit(formDetails) {
        try {
            const response = await axios.post(signin(), {
                username: formDetails.username,
                email: formDetails.email,
                password: formDetails.password
            }, {withCredentials:true});           
            const tokenDetails = jwtDecode(response.data.token)
            setUser({username: tokenDetails.user, id:tokenDetails.id})
            setToken('jwt-token', response.data.token) ;    
            navigator("/")
        } catch (error) {
            authRef.current.resetFormData();
            console.log(error);
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
                <h4 className="text-center">LogIn</h4>
                <Auth onSubmit={onAuthFormSubmit} ref={authRef} />
                <div className="signup-btn text-center " id="showSignupbtn">
                    <Link to='/signup'>
                        Don't have an account? SignUp here
                    </Link></div>
            </div>
        </div>
    )
}
export default Login;