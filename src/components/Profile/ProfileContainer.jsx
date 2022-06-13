import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { getProfile, getUserStatus, updateUserStatus} from '../../redux/ProfileReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        const location = { location: useLocation() };
        return <Children {...props} match={match} location={location} />
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }        
        this.props.getProfile(userId);   
        // setTimeout(()=>
        // this.props.getUserStatus(userId),3000
        // );     
        this.props.getUserStatus(userId);
    };

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus} userId={this.props.userId}/>
        )
    };
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId:state.auth.userId
});

export default compose(
    connect(mapStateToProps, { getProfile, getUserStatus, updateUserStatus }),
     withRouter, withAuthRedirect
     )(ProfileContainer);