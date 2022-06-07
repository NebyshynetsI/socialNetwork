import style from './Sidebar.module.css'
import Friend from './../Friends/Friend/Friend'

const Sidebar = (props) => {
    let friends = props.state.map(f=> <Friend name = {f.name} avaImageUrl ={f.avaImageUrl}/>)
    return (
        <div className={style.sidebar}>            
            {friends}
        </div>
    )
}

export default Sidebar;