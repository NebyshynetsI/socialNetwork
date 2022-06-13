import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPDATE_USER_STATUS ='UPDATE_USER_STATUS';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are u?', likesCount: '5' },
    { id: 2, message: "It's my first post!", likesCount: '15' },
  ],
  newPostText: 'sobaka pisala',
  profile: null,
  status: ''
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { id: 3, message: state.newPostText, likesCount: 0 }],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT:
      {
        return {
          ...state,
          newPostText: action.value
        };
      }
      case SET_USER_PROFILE:
        {
          return {
            ...state,
            profile: action.profile
          }
        }
    case SET_USER_STATUS:
      {
        return {
          ...state,
          status: action.status
        }
      }
      case UPDATE_USER_STATUS:
        {
          return{
            ...state,
            status:action.status
          }
        }

    default:
      return state;
  }
}


export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    value: text
  }

};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }

}



export const setStatus = (status) => {
  return{
    type: SET_USER_STATUS,
    status
  }
}

export const updateStatus = (status) => {
  return{
    type: UPDATE_USER_STATUS,
    status
  }
}

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    });
  }
}

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data));
    });
  }
}

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if(response.data.resultCode === 0){
        dispatch(setStatus(status));
      }      
    });
  }
}

export default profileReducer;