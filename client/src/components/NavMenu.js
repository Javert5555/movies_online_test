import { NavLink } from 'react-router-dom';

function NavMenu() {
  return (
    <nav>
      <ul style={{display: 'flex'}}>
        <li style={{marginRight: '1.2rem', listStyleType: 'none'}}><NavLink to='/'>Home</NavLink></li>
        <li style={{marginRight: '1.2rem', listStyleType: 'none'}}><NavLink to='/movies'>Movies</NavLink></li>
        <li style={{marginRight: '1.2rem', listStyleType: 'none'}}><NavLink to='/signup'>Sign Up</NavLink></li>
        <li style={{marginRight: '1.2rem', listStyleType: 'none'}}><NavLink to='/signin'>Sign In</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavMenu