import React from 'react'
import { connect } from 'react-redux'
import Login from './Login';



class LoginContainer extends React.Component{
    
    onComponentDidMount(){

    };
    
    render(){
        return <Login />
    }

}

const mapStateToProps = (state) =>{
 return {};
}



export default connect(mapStateToProps,{})(LoginContainer);

