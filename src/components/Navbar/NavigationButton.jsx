import { Link } from 'react-router-dom';
import './NavigationButton.scss';
import { useContext, useEffect } from 'react';
import { NavbarContext, useNavbarContext } from '../../contexts/NavbarContext';

const NavigationButton = (props) => {

    const {currentButton, setCurrentButton} = useNavbarContext();
    const key = props?.name;

    useEffect(() => {
        console.log(setCurrentButton);
    }, [key]);

    return (
        <Link className="navigation-button" onClick={() => setCurrentButton(key)} id={(currentButton == key ? "current" : "")} key={key} to={props?.to}>{props?.icon}<span>{props?.text}</span></Link>
    )
}

export default NavigationButton;