import { Navigate } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return this.props.isAuth
                ? <Component {...this.props} />
                : <Navigate to={'/login'} />
        }
    }

    let mapStateToPropsForRedirect =(state)=>({
        isAuth: state.auth.isAuth
    });

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};

