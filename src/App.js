import Main from "./components/Main";
import { Provider } from "./context/context";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Second from "./components/SecondPage";

function App() {
  const [data, setData] = useState([]);

  const contextData = { data, setData };

  return (
    <>
      <Provider value={contextData}>
        <Router>
          <Route exact path='/' component={Main}></Route>
          <Route exact path='/secondPage' component={Second}></Route>
        </Router>
      </Provider>
    </>
  );
}

export default App;
