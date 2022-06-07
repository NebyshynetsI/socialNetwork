import React from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { useParams, useLocation} from 'react-router-dom';
import {setUserProfile} from '../../redux/ProfileReducer'
import { profileAPI } from '../../api/api';

export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       const location  = {location: useLocation()};
       return <Children {...props}  match = {match} location={location} />
   }
 }

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        profileAPI.getProfile(userId).then(response => {
                this.props.setUserProfile(response.data);
            });
    };

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    };
};

const mapStateToProps =(state)=>({
    profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{setUserProfile})(withUrlDataContainerComponent);