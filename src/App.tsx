import './css/CssDesktop.css'
import './css/CssTablet.css'
import './css/CssSmartPhone.css'

import {
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

//Pages
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
//Navigation
import MainNavigation from './navigation/MainNavigation'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<MainNavigation />}>
        <Route 
          path='/'
          element={<Home />}
        >
          <Route path='projects' element={<Projects />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
      </Route>
  )
)

function App() {
  return (
      <main>
        <RouterProvider router={router}/>
      </main>

  );
}

export default App;

