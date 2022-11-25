import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg"
import { 
    NavigationContainer , 
    LogoContainer,
    NavigationLinkContainer,
    NavLink
} from "./navigation.style";


import { UserContext } from "../../context/context.component";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { CartOpenContext } from "../../context/cart.context";

const NavigationBar = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartOpenContext);

    const signOut = async () => {
        await signOutUser();
    }

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                <CrownLogo />
            </LogoContainer>
            <NavigationLinkContainer>
                <NavLink to="/shop">
                    SHOP
                </NavLink>
                {currentUser ? (
                    <NavLink as="span" onClick={signOut}>Sign Out</NavLink>
                ) : (
                    <NavLink to="/auth">
                        SIGN IN
                    </NavLink>
                )
                }
                <CartIcon />
            </NavigationLinkContainer>
            {isCartOpen && (<CartDropdown />)}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
}

export default NavigationBar;