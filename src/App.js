import './App.css';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Context from './context/Context';
import './App.css';
import SignIn from './signIn/SignIn';
import PreRegistration from './preRegistration/PreRegistration';
import MainPageForAdmin from './AdminPages/MainPageForAdmin';
import MainPageForStudent from './StudentPages/MainPageForStudent';
import DinnerMenuForStudent from './StudentPages/DinnerMenuForStudent';
import RequestFormForSudents from './StudentPages/RequestFormForStudents';
import MakeAnnouncementPage from './AdminPages/MakeAnnouncementPage';
import ViewAnnouncement from './StudentPages/ViewAnnouncement';
import DinnerMenuForAdmin from './AdminPages/DinnerMenuForAdmin';
import AnnouncementPageForAdmin from './AdminPages/AnnouncementPageForAdmin';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[name,setName] = useState('');
  const[password,setPassword] = useState('');
  const contextData ={
  name,
  setName,
  password,
  setPassword
}

  return (
    
    <Context.Provider value={contextData}>
    <div className="App">
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route element={<SignIn/>} path={"/"} />
        <Route element={<PreRegistration/>} path={"/Pre-registration"} />
        <Route element={<MainPageForStudent/>} path={"/MainPageForStudent"} />
        <Route element={<MainPageForAdmin/>} path={"/MainPageForAdmin"} />
        <Route element={<DinnerMenuForStudent/>} path={"/DinnerMenuForStudent"} />
        <Route element={<RequestFormForSudents/>} path={"/RequestFormForSudents"} />
        <Route element={<MakeAnnouncementPage/>} path={"/MakeAnnouncementPage"} />
        <Route element={<ViewAnnouncement/>} path={"/ViewAnnouncement"} />
        <Route element={<AnnouncementPageForAdmin/>} path={"/RequestPageForAdmin"} />
        
        <Route element={<DinnerMenuForAdmin/>} path={"/DinnerMenuForAdmin"} />

        
      </Routes>
    </BrowserRouter>
    </div>
    </Context.Provider>
  );
}

export default App;