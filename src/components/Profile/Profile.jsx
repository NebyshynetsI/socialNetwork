import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import p from './Profile.module.css'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  )
}
export default Profile;