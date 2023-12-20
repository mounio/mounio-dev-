import { NavLink, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='home-about'>
        <h2>About me</h2>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Sint tenetur veniam facilis, 
            laborum deserunt corporis?
        </p>

        <nav>
            <NavLink to="Projects">Projects</NavLink>
            <NavLink to="Contact">Contact</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}

export default Home