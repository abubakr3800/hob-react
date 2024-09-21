import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Offer from './components/Offer/Offer';
import Destination from './components/Destination/Destination';
import Hotels from './components/Hotels/Hotels';
import Root from './components/Root';

  const router = createBrowserRouter([
    {
      errorElement : <><Navbar /><Home /><Footer /></>,
      children :[
        {
          path : '/',
          element : <Root />,
          children : [
            {path : '', element:<Home />},
            {path:'/contact', element:<Contact /> },
            {path:'/offer/:id', element:<Offer /> },
            {path:'/destination/:id', element:<Destination /> },
            {path:'/hotels/:id', element:<Hotels /> }
          ]
        }
      ]
    }
  ])

function App() {
  if(localStorage.key('lan') === null)
    localStorage.setItem('lan','it');
  return (
  <>
    <RouterProvider router={router}/>
  </>
  );
}

export default App;
