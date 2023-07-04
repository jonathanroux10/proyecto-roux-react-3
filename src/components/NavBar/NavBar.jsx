import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <Link className='navigation' to="/">
          <h1>Tienda Gammer</h1>
        </Link>
        <nav>
            <ul>
                <li> 
                    <NavLink className='navigation menu' to="/categoria/Juegos"> Juegos </NavLink>
                </li>
                <li>  
                    <NavLink className='navigation menu' to="/categoria/Utilidades"> Utilidades </NavLink>
                </li>
                <li>  
                    <NavLink className='navigation menu' to="/categoria/Celulares"> Celulares </NavLink>
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}
export default NavBar