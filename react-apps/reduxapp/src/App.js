import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Home';
import About from './About';
import Header from './Header';
import {Provider} from 'react-redux';
import { myStore } from './redux/config';

function App() {
  let routerPaths = createBrowserRouter([
    {"path": "/", "element": <Home/>},
    {"path": "/About", "element": <About/>},
    {"path": "/Contact", "element": <Contact/>}
  ])

  return (
    <Provider store = {myStore}>
    <div className="App">
      <RouterProvider router={routerPaths} />
      <Header/>
    </div>
    </Provider>
  );
}

export default App;