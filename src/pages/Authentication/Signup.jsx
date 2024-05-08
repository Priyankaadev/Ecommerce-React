import './Auth.css'
import Auth from '../../components/Auth/Auth';
import { Link } from 'react-router-dom';

function Signup(){
    return (
        <div className="container" style={{minHeight:'100vh', display:"flex", flexDirection:"column"}}>
        <div className="row">
            <h2 className="home-title text-center">
                Welcome to Shop Cart
            </h2>
        </div>
        <div className="login-wrapper" id="loginForm">
            <h4 className="text-center">SignUp</h4>
            <Auth />
            <div className="signup-btn text-center " id="showSignupbtn"><Link to='/signin'>Already have an account? SignIn here</Link></div>
        </div> 
    </div>
    )
}
export default Signup;