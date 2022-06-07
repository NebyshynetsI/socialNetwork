import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { makeAuth } from '../../redux/AuthReducer';


class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.makeAuth();
    };

    render(){
        return <Header {...this.props}/>
    };

};

const mapStateToProps=(state)=>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};

export default connect(mapStateToProps, {makeAuth})(HeaderContainer);