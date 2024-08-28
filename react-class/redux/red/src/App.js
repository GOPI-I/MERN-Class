
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {Provider} from 'react-redux'
import { myStore } from './redux/config';
import Header from './Header';

let routerPaths = createBrowserRouter([
  {path:"/home",element:<Home/>},
  {path:"/about",element:<About/>},
  {path:"/contact",element:<Contact/>}



])
function App() {
  return (
   
      <Provider store={myStore}>
        <div className='App'>
          <RouterProvider router={routerPaths}/>
          
        </div>
      </Provider>
     
      
      // {/* <Header/>
      // <RouterProvider router={routerPaths} /> */}
      
  

  );
}

export default App;
