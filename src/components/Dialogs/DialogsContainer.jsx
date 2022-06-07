import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/DialogsReducer'
import React from 'react'
import Dialogs from './Dialogs';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        messages:state.messagesPage.messages,
        dialogsData:state.messagesPage.dialogsData,
        newMessageText: state.messagesPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: ()=> {
            dispatch(addMessageActionCreator());
        },
        updateMessageText:  (text)=> {
            let action = updateMessageTextActionCreator(text);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;