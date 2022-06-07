const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT= 'UPDATE-MESSAGE-TEXT';

let initialState = {
  messages: [
    { id: 1, message: 'Idi, vodki naidi' },
    { id: 2, message: 'How are u?' },
    { id: 3, message: "Let's shuffle" },
    { id: 4, message: 'I want to break free' },
    { id: 5, message: 'Gav-GAV!' },
    { id: 6, message: 'Wanna dance?' },
    { id: 7, message: 'In god i trust!' }
  ],
  dialogsData: [
    { id: 1, name: 'Vano' },
    { id: 2, name: 'Vitalya' },
    { id: 3, name: 'Temich' },
    { id: 4, name: 'Leva' },
    { id: 5, name: 'Sobaka' },
    { id: 6, name: 'Valera' },
    { id: 7, name: 'Latish' }

  ],
  newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      {
        return {
          ...state,
          newMessageText: '',
          messages: [...state.messages, { id: 8, message: state.newMessageText }]
        };
      }
    case UPDATE_MESSAGE_TEXT:
      {
        return {
          ...state,
          newMessageText: action.value
        };
      }
    default:
      return state;
  }
}

export let addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  };
}
export let updateMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    value: text
  }

};

export default dialogsReducer;