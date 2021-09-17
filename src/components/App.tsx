import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "state/store";
import Header from "components/common/Header";
import Home from "pages/Home";
import Posts from "pages/Posts";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;