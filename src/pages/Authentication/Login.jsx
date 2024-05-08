import { Link } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';
import './Auth.css'
function Login(){
    return (
        <div className="container" style={{minHeight:'100vh', display:"flex", flexDirection:"column"}}>
        <div className="row">
            <h2 className="home-title text-center">
                Welcome to Shop Cart
            </h2>
        </div>
        <div className="login-wrapper" id="loginForm">
            <h4 className="text-center">LogIn</h4>
            <Auth />
            <div className="signup-btn text-center " id="showSignupbtn"><Link to='/signup'>Don't have an account? SignUp here</Link></div>
        </div>
    </div>
    )
}
export default Login;