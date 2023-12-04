import { NavLink } from 'react-router-dom';

function NavMenu() {
  return (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/movies'>Movies</NavLink></li>
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/signin'>Sign In</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavMenu