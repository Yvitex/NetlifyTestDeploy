import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg"
import { 
    NavigationContainer , 
    LogoContainer,
    NavigationLinkContainer,
    NavLink
} from "./navigation.style";
import { useSelector } from "react-redux";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selection";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
import { signOutStart } from "../../store/user/user.action";

const NavigationBar = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();

    const signOut = () => dispatch(signOutStart());

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