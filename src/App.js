import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="container">
          <h1 className="text-center my-4">
            E-commerce Shopping Cart Application
          </h1>
          <hr />
          <div className="row d-flex justify-content-center">
            <div className="col-md-9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Filter />
                      <Products />
                    </>
                  }
                />
                <Route exact path="/cart" element={<Basket />} />
              </Routes>
            </div>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
