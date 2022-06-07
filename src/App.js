import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Friends from './components/Friends/Friends';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from "react-router-dom"
import './index'
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
  return (

    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      {/* <Sidebar state={props.state.sidebar.friends} /> */}
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*'
            element={<DialogsContainer />} /> 
          <Route path='/profile/:userId'
            element={<ProfileContainer />} />
            <Route path='/profile/'
            element={<ProfileContainer />} />
          <Route path='/users'
            element={<UsersContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          {/* <Route path='/friends' element={<Friends state={props.state.sidebar.friends} />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
