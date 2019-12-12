import React from "react";

import "./App.css";
import HomePage from "../src/pages/homepage/homepageComponent";
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from "../src/pages/shop/Shop";
import CheckOut from "../src/pages/checkout/Checkout";
import Header from "./components/header/Header";
import Credentials from "./pages/credentials/credentials";
import { setCurrentUser } from "./redux/user/userAction";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { selectCurrentUSer } from "./redux/user/userSelector";
import { createStructuredSelector } from "reselect";


class App extends React.Component {
  unsubscirbeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscirbeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      setCurrentUser(userAuth);

    });
  }

  componentWillUnmount() {
    this.unsubscirbeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" component={CheckOut} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Credentials />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUSer,

});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
