import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './styles/NavBar.css';

function NavBar() {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('jwt');
    navigate('/login');
  };
  return (
    <div className="navbar">
      <ul className="navbar__nav">
        <li>
          <Link to="ducks" className="navbar__link">
            Утки
          </Link>
        </li>
        <li>
          <Link to="my-profile" className="navbar__link">
            Мой профиль
          </Link>
        </li>
        <li>
          <button onClick={signOut} className="navbar__link navbar__button">
            Выйти
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
