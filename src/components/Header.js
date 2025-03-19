import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Constants";


const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header Render");
    
// it is called every time when btnNameReact updated
    useEffect(() => {
        console.log("useEffect Called");
        
    }, [btnNameReact]);
    

    return(
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src={ LOGO_URL} 
                    />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button onClick={() => {
                        btnNameReact === "Login" ?
                        setBtnNameReact("Logout") :
                        setBtnNameReact("Login")
                        
                        
                    }} className="login">{btnNameReact}</button>
                </ul>
            </div>
        </div>
        
    );
};

export default Header;