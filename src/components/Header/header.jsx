import logo from '../../assets/logos/logo.png'; // Import de l'image du logo
import { useUser } from '../../utils/context/UserProvider/userProvider';
import './Header.scss'; // Styles CSS du composant
import { NavLink, Link } from 'react-router-dom'; // Import des composants de navigation

function Header() {
    const { userId } = useUser(); // Récupération de l'ID de l'utilisateur depuis le contexte

    return (
        <div className="sportsee-header">
            <Link className="sportsee-header-logo" to="/">
                {/* Logo de l'application */}
                <img src={logo} alt='SportSee' className='SportSee-header' />
            </Link>
            <nav className="SportSee-header-links nav">
                {/* Liens de navigation */}
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-idle'
                    }
                    to="/">Accueil</NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-idle'
                    }
                    to={`/user/${userId}`}>Profil</NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-idle'
                    }
                    to="/setting">Réglage</NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-idle'
                    }
                    to="/community">Communauté</NavLink>
            </nav>
        </div>
    );
}

export default Header;
