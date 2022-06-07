import style from './Friends.module.css'
import Friend from './Friend/Friend'

const Friends = (props) => {
    let friends = props.state.map(f=> <Friend name = {f.name} avaImageUrl ={f.avaImageUrl}/>)
    return (
        <div>            
            {friends}
        </div>
    )
}

export default Friends;