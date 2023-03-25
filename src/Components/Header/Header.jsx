import header from './Header.module.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const Header = () => {
  return (
    <nav className={header.nav}>
        <h2 className={header.logo}>WEB <span className={header.span}>BeatMaker</span></h2>
        <ul>
            <li><a href='/'>Главная</a></li>
            <li><a href='/'>О наc</a></li>
            <li><a href='/login'>Вход</a></li>
        </ul>
    </nav>
  );
}

export default Header;



