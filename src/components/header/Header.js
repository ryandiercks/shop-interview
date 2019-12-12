import React from "react";
import "./Header.scss";

import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropDown/CartDropdown";

import { selectCartHidden } from "../../redux/cart/cartSelector";
import { selectCurrentUSer } from "../../redux/user/userSelector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./HeaderStyles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>

      {currentUser ? (
        <OptionLink
          onClick={() => {
            console.log("click sign out");
            return auth.signOut();
          }}
        >
          LOG OUT
        </OptionLink>
      ) : (
          <OptionLink to="/signin">
            {" "}
            SIGN IN
        </OptionLink>
        )}

      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUSer,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
