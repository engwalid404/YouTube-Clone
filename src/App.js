import { Provider } from "react-redux";

import "./input.css";

import store from "./utils/store";

import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
