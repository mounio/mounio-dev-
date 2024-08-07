import { NavLink, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='home-about'>
        <h2>About me</h2>
        <p>
          A few years ago I started learning JAVASCRIPT, which quickly became one of my favorite programming languages.
          I am quite self-taught and learn very quickly, I am social and like to share my knowledge and discoveries.
          I like to stay up to date with new technologies, which is very important as a
          developer.
        </p>
        <div className='home-skils'>
          <ul>
            <li><h4>skils</h4></li>
            <li>.NET 6.0 - C#</li>
            <li>ASP.NET en REST API’s</li>
            <li>Reactjs/React native</li>
            <li>MS SQL</li>
            <li>HTML, CSS, JS/TypeScript</li>
            <li>Github/Git </li>
          </ul>

        </div>

        <nav>
            <NavLink to="Projects">Projects</NavLink>
            <NavLink to="Contact">Contact</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}

export default Home