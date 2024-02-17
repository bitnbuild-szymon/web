import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { CiDumbbell } from "react-icons/ci";
import { SlCompass } from "react-icons/sl";
import { BiBowlHot } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import './Navbar.scss';
import NavigationButton from '../components/navbar/NavigationButton';
import { useAuth } from "../contexts/AuthContext";


const Navbar = () => {

    const {user, _, __, signOut} = useAuth();

    return (
        <nav>
            <div className="side-buttons">
                <NavigationButton name="home" to="/" icon={<GoHome />} text="home" />
                <NavigationButton name="training-plans" to="/training-plans" icon={<CiDumbbell />} text="training plans" />
                <NavigationButton name="diet" to="/diet" icon={<BiBowlHot />} text="diet" />
                <NavigationButton name="explore" to="/explore" icon={<SlCompass />} text="explore" />
                <NavigationButton name="settings" to="/settings" icon={<IoSettingsOutline />} text="settings" />
            </div>
            {(user 
            ? (<button className="bottom-button" onClick={() => {signOut()}}>sign out</button>)
            : (<Link className="bottom-button" to="/auth/sign-in">sign in</Link>))}
        </nav>
    );
}

export default Navbar;