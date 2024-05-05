import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
    return (

        <div className="container-fluid" style={{position:'absolute', bottom:'0', backgroundColor:'lightgrey'}}  >
            <div className="footer" style={{display:'flex' ,justifyContent:'space-around'}}>
                <div>
                    <h4>Shop cart</h4>
                    <p>Every product delivered to you</p>
                </div>
                <div >
                    <ul style={{display:'flex', flexDirection:'column'}} >
                       <span href="/" >About us</span>
                        <span href="/">Contact us</span>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Footer;
