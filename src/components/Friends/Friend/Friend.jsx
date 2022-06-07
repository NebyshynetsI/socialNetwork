import style from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={style.friend}>
            <p>{props.name}</p>
            <img src={props.avaImageUrl} alt="" />
        </div>
    )
}

export default Friend;