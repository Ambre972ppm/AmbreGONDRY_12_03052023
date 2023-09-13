import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

// Import des composants et pages
import Header from '../components/Header/header';
import Sidebar from '../components/Sidebar/sidebar';
import Profile from '../pages/Profile/profile';
import Home from '../pages/Home/home';
import Setting from '../pages/Setting/setting';
import Community from '../pages/Community/community';
import Error from '../pages/Error/error';

// Import du contexte utilisateur
import { UserProvider } from '../utils/context/UserProvider/userProvider';

function App() { 
    return (
        <Router>
            <UserProvider>
                {/* En-tête global de l'application */}
                <Header />
                {/* Barre latérale globale de l'application */}
                <Sidebar />
                {/* Conteneur pour les pages */}
                <div className="pages">
                    <Routes>
                        {/* Page d'accueil */}
                        <Route path="/" element={<Home />} />
                        {/* Page de profil utilisateur */}
                        <Route path="/user/:userId" element={<Profile />} />
                        {/* Page de paramètres */}
                        <Route path="/setting" element={<Setting />} />
                        {/* Page de communauté */}
                        <Route path="/community" element={<Community />} />
                        {/* Gestion des erreurs pour toutes les autres routes */}
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
            </UserProvider>
        </Router>  
    );
}

export default App;
