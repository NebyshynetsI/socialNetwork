import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} userId={props.userId}/>
      <MyPostsContainer />
    </div>
  )
}
export default Profile;