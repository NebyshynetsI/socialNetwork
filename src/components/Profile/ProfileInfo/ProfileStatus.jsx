import style from './ProfileStatus.module.css'

const ProfileStatus = (props) => {
    return (        
        <div>
            {props.editMode
                ? <div className={style.statusArea}>
                    <input autoFocus={true} onBlur={ () => {props.changeEditMode(false)}} value={props.status}dfgfdg></input>
                </div>
                :
                <div className={style.statusArea}>
                    <span onClick={ () => {props.changeEditMode(true)}}>{props.status}dsdfsfdsfdfsf</span>
                </div>}
        </div>
    )
}

export default ProfileStatus;