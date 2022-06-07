import d from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import React from 'react'

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map((el)=> <DialogItem name={el.name} key={el.id} id={el.id} />); 
    let messagesElements= props.messages.map(el=><Message message={el.message} key={el.id}/> );

    let onAddMessage = ()=>{        
       props.addMessage();
    }

    let onMessageTextChange = (e)=>{      
        let text =e.target.value; 
        props.updateMessageText(text);
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea onChange={onMessageTextChange} placeholder='Enter your message' value={props.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={onAddMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;