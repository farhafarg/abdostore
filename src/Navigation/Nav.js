import{FiHeart}from"react-icons/fi"
import{ AiOutlineShoppingCart , AiOutlineUserAdd , AiOutlineMoon }from "react-icons/ai";
import logo from "../Images/WhatsApp_Image_2024-12-16_at_11.44.55_PM-removebg-preview.png";

import"./Nav.css";
function Nav() {
return <nav> 
    <div className="logo-container">
        <img src={logo} alt="logo"/>
        <p>ELDOD Store</p>
    </div>
    <div className="nav-container">
        <a href="Home">Home</a>
        <a href="Category">Category</a>
    </div>
    <div className="profile-container">
        <a href="#"> 
            <FiHeart className="nav-icons"/>
        </a>
        <a href="#"> 
            < AiOutlineShoppingCart className="nav-icons"/>
        </a>
        <a href="#"> 
            <AiOutlineUserAdd className="nav-icons"/>
        </a>
        <a href="#">
        <AiOutlineMoon  className="nav-icons"/>
        </a>
    </div>
</nav>
}

export default Nav;