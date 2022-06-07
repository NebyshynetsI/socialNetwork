import sidebarReducer from "./SidebarReducer";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are u?', likesCount: '5' },
        { id: 2, message: "It's my first post!", likesCount: '15' },
      ],
      newPostText: 'sobaka pisala'
    },
    messagesPage: {
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
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Volk', avaImageUrl: 'https://img.favpng.com/21/10/23/computer-icons-avatar-social-media-blog-font-awesome-png-favpng-jKXEv9rWhum7VbNKDbcELd6Di.jpg' },
        { id: 2, name: 'Vitalya', avaImageUrl: 'https://w7.pngwing.com/pngs/716/469/png-transparent-social-media-computer-icons-social-network-avatar-social-media-computer-network-social-media-data-thumbnail.png' },
        { id: 3, name: 'Sobaka', avaImageUrl: 'https://e7.pngegg.com/pngimages/439/304/png-clipart-millennials-social-media-social-network-generation-z-social-media-purple-computer-network-thumbnail.png' }
      ]
    }
  },
  _callSubscriber() {
  }, 

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  // updateMessageText(value) {
  //   this._state.messagesPage.newMessageText = value;
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(value) {
  //   this._state.profilePage.newPostText = value;
  //   this._callSubscriber(this._state);
  // },
  // addPost() {
  //   let newPost = {
  //     id: 3,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0
  //   };

  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = 'sobaka kakala';
  //   this._callSubscriber(this._state);
  // },
  // addMessage() {
  //   let newMessage = {
  //     id: 8,
  //     message: this._state.messagesPage.newMessageText
  //   };
  //   this._state.messagesPage.messages.push(newMessage);
  //   this._state.messagesPage.newMessageText = '';
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._state.users = usersReducer(this._state.users, action);
    
    this._callSubscriber(this._state);
  }
};

export default store;