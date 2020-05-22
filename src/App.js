import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Homepage/Homepage";
import Shoppage from "./pages/Shoppage/Shoppage";
import Header from "./components/Header/Header";
import AuthPage from "./pages/AuthPage/AuthPage";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  state = {
    currentUser: null
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {this.setState({currentUser :{id: snapShot.id, ...snapShot.data()}})});
        console.log(this.state);
      } else {
        this.setState({ currentUser: userAuth });
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    console.log(this.state.currentUser);

    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shoppage} />
          <Route path="/signin" component={AuthPage} />
        </Switch>
      </div>
    );
  }

}

export default App;
