import {NavLink, Outlet} from 'react-router-dom';

export default function MainNavigation() {
  return (
    <div className='main-navigation'>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
            </nav>
         </header>

         <main>
            <Outlet />
         </main>
         <h3>Mounio - dev</h3>
    </div>
  )
}
