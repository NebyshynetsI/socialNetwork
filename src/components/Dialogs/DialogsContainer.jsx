import { addMessage, updateMessageText } from '../../redux/DialogsReducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import React from 'react';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class DialogsContainer extends React.Component{
    onComponentDidMount(){      

    }

    render() {
        return <Dialogs dialogsData={this.props.dialogsData} messages={this.props.messages}
            newMessageText={this.props.newMessageText} updateMessageText={this.props.updateMessageText} addMessage={this.props.addMessage} />
    }

};

let mapStateToProps = (state) => {
    return {
        messages:state.messagesPage.messages,
        dialogsData:state.messagesPage.dialogsData,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps,{addMessage,updateMessageText }), withAuthRedirect)(DialogsContainer);

