import { useNavigate } from 'react-router-dom';
import header from './Header.module.css';


const Header = () => {

  const navigate = useNavigate();


  return (
    <nav className={header.nav}>
        <h2 className={header.logo}>WEB <span className={header.span}>BeatMaker</span></h2>
        <ul>
            <li onClick={() => {navigate('/');}}><a >Главная</a></li>
            <li><a >О нас</a></li>
            <li onClick={() => {navigate('/login');}}><a >Вход</a></li>
        </ul>
    </nav>
  );
}

export default Header;



