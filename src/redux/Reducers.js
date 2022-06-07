import { combineReducers } from 'redux'
import profileReducer from './ProfileReducer'
import dialogsReducer from './DialogsReducer'
import sidebarReducer from './SidebarReducer'
import usersReducer from './UsersReducer'
import authReducer from './AuthReducer'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export default rootReducer;