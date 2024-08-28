
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';

let routerPaths = createBrowserRouter([
  {path:"/home",element:<Home/>},
  {path:"/about",element:<About/>},
  {path:"/contact",element:<Contact/>}



])
function App() {
  return (
    <div>
      <Header/>
      <RouterProvider router={routerPaths} />
      
  
  
    </div>
  );
}

export default App;
