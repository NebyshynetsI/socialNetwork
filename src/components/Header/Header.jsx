import { NavLink } from 'react-router-dom';
import style from './Header.module.css'
const Header = (props) => {
  return (
    <header className={style.header}>
      <img src='https://www.lifepng.com/wp-content/uploads/2020/10/580b57fcd9996e24bc43c53e.png' />
      <div className={style.loginBlock}>
        {props.isAuth ? props.login :
          <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>)
}
export default Header;