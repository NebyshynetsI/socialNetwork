import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusContainer from './ProfileStatusContainer';
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (  
        <div>
            <div className={style.description}>
                <ProfileStatusContainer status={props.status} updateStatus={props.updateStatus}/>
                <img src={props.profile.photos.large} />
            </div>
        </div>
    )
}

export default ProfileInfo;