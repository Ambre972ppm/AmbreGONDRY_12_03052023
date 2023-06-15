import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import Profile from './pages/Profile/profile';
import Home from './pages/Home/home';
import Setting from './pages/Setting/setting';
import Community from './pages/Community/community';
import Error from './pages/Error/error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Sidebar />
      <div className="pages">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </div>
    </Router>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
