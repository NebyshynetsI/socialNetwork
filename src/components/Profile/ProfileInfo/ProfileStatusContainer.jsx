import ProfileStatus from "./ProfileStatus";
import React from "react";
import style from './ProfileStatus.module.css'
import { connect } from "react-redux";
import { updateUserStatus } from "../../../redux/ProfileReducer";

class ProfileStatusContainer extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    };

    changeEditMode = (editMode) => {    
        this.setState(
            {
                editMode: editMode
            }            
        );           
        if(editMode === false) {
            this.props.updateStatus(this.state.status);
        }   
    };

    onComponentDidMount(){

    };

    componentDidUpdate(prevProps,prevState){
        if(prevProps.status != this.props.status){
            this.setState({
                status: this.props.status
            })
        }


    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })         
    }

    render(){
        return(
            <div>
            {this.state.editMode
                ? <div className={style.statusArea}>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={ () => {this.changeEditMode(false)}} value={this.state.status}></input>
                </div>
                :
                <div className={style.statusArea}>
                    <span onClick={ () => {this.changeEditMode(true)}}>{this.props.status || 'No status' }</span>
                </div>}
        </div>
        )
        // <ProfileStatus 
        // status={this.props.status}
        // editMode={this.state.editMode}
        // changeEditMode={this.changeEditMode}
        // updateStatus={this.props.updateStatus}
        // setState={this.setState.bind(this)}/>;
    };

}

// let mapStateToProps = (props) => {
//     return{
//         status : props.profilePage.status,
//     };
// }

// let mapDispatchToProps = (dispatch) => {
//     return {
//       updateStatus : updateUserStatus
//     };  
// }

export default ProfileStatusContainer;