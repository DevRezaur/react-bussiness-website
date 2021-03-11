import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavContainer, 
    NavLogo, 
    NavIcon,
    NavTitle, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavItemBtn,
    NavBtnLink } from './Navbar.element';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [buttonLabelSm, setButtonLabelSm] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 900) {
            setButtonLabelSm(false);
        } else {
            setButtonLabelSm(true);
        }
    }

    useEffect(() => {
        showButton();
    },[])

    window.addEventListener('resize', showButton);

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'>
                        <NavIcon />
                        <NavTitle>Dev Academy</NavTitle>
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/mentorship'>
                                Mentorship
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/testimonial'>
                                Testimonials
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/courses'>
                                Courses
                            </NavLink>
                        </NavItem>
                        <NavItemBtn>
                            {buttonLabelSm ? (
                                <NavBtnLink to="/sign-in">
                                    <Button primary>Sign In</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-in">
                                    <Button fontBig primary>Sign In</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
