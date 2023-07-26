import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from '../components/Header/header';
import Sidebar from '../components/Sidebar/sidebar';
import Profile from '../pages/Profile/profile';
import Home from '../pages/Home/home';
import Setting from '../pages/Setting/setting';
import Community from '../pages/Community/community';
import Error from '../pages/Error/error';
import { UserProvider } from '../utils/context/UserProvider/userProvider';

function App() { 
    return(
        <Router>
            <UserProvider>
                <Header />
                <Sidebar />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/user/:userId" element={<Profile />} />
                        <Route path="/setting" element={<Setting />} />
                        <Route path="/community" element={<Community />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
            </UserProvider>
        </Router>  
                   
    )
}

export default App
