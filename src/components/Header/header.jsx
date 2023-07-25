import logo from '../../assets/logos/logo.png'
import './Header.scss'
import { NavLink, Link } from 'react-router-dom';

function Header() {
	const userId = 12;

    return (<div className="sportsee-header">
                <Link className="sportsee-header-logo" to="/">
                    <img src={logo} alt='SportSee' className='SportSee-header'/>
                </Link>
                <nav className="SportSee-header-links nav">
                    <NavLink   className={({ isActive }) =>
						        isActive ? 'nav-active' : 'nav-idle'
					        }
                            to="/">Accueil</NavLink>
                    <NavLink   className={({ isActive }) =>
						        isActive ? 'nav-active' : 'nav-idle'
					        }
                            to={`/user/${userId}`}>Profil</NavLink>
                    <NavLink   className={({ isActive }) =>
						        isActive ? 'nav-active' : 'nav-idle'
					        }
                            to="/setting">Réglage</NavLink>
                    <NavLink   className={({ isActive }) =>
						        isActive ? 'nav-active' : 'nav-idle'
					        }
                            to="/community">Communauté</NavLink>
                </nav>
            </div>)
}

export default Header