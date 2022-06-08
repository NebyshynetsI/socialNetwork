import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useParams, useLocation} from 'react-router-dom';
import {getProfile} from '../../redux/ProfileReducer';
import {withAuthRedirect} from '../hoc/withAuthRedirect';

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
        this.props.getProfile(userId);
    };

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    };
};

const mapStateToProps =(state)=>({
    profile: state.profilePage.profile, 
});


let withUrlDataContainerComponent = withRouter(withAuthRedirect(ProfileContainer));

export default connect(mapStateToProps,{getProfile})(withUrlDataContainerComponent);