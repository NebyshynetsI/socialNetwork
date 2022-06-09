import ProfileStatus from "./ProfileStatus";
import React from "react";
import { connect } from "react-redux";

class ProfileStatusContainer extends React.Component{
    state = {
        editMode: false
    }

    changeEditMode = (editMode) => {
        this.setState(
            {
                editMode: editMode
            }
        );
    };

    onComponentDidMount(){

    }

    render(){
        return <ProfileStatus 
        status={this.props.status}
        editMode={this.state.editMode}
        changeEditMode={this.changeEditMode}/>;
    }

}

let mapStateToProps = (store) => {
    return{
        status : store.profilePage.editMode
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
      
    };  
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileStatusContainer);