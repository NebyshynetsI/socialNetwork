import { NavLink } from 'react-router-dom';
import n from './Navbar.module.css'
const Navbar = ()=>{
    return(
        <nav className={n.nav}>

          <div className={n.item}>
            <NavLink to="/profile" className={page=>page.isActive ? n.active : n.item}>Profile</NavLink>
          </div>
          <div className={n.item}>
            <NavLink to="/dialogs/" className={page=>page.isActive ? n.active : n.item}>Messages</NavLink>
            </div>  
          <div className={n.item}>
            <NavLink to="/news" className={page=>page.isActive ? n.active : n.item}>News</NavLink>
          </div>
          <div className={n.item}>
            <NavLink to="/music" className={page=>page.isActive ? n.active : n.item}>Music</NavLink>
          </div>
          <div className={n.item}>
            <NavLink to="/settings" className={page=>page.isActive ? n.active : n.item}>Settings</NavLink>
          </div>
          <div className='friends'>
          <NavLink to="/friends" className={page=>page.isActive ? n.active : n.item}>Friends</NavLink>
          </div>
          <div className='users'>
          <NavLink to="/users" className={page=>page.isActive ? n.active : n.item}>Users</NavLink>
          </div>
          
      </nav>
    )
}

export default Navbar;