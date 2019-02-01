import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import List from "./components/ItemList.jsx";

import "./styles.css";

export class App extends PureComponent {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <List />
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
