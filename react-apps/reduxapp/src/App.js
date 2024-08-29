// import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
// import Header from "./Header";
import Web from "./Web";
import { Provider } from "react-redux";
import { myStore } from "./redux/Config";

const routerPaths = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/web", element: <Web /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

function App() {
  return (
    <Provider store={myStore}>
      {" "}
      <div className="App">
        {/* <Header /> */}
        <RouterProvider router={routerPaths} />
      </div>
    </Provider>
  );
}

export default App;