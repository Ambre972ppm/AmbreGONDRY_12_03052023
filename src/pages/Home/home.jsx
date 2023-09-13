import React from 'react';
import './Home.scss';

// Import du contexte utilisateur
import { useUser } from '../../utils/context/UserProvider/userProvider';

function Home() {
    // Récupération des informations utilisateur à partir du contexte
    const { setUserId, userId } = useUser();

    // Gestion du changement d'utilisateur lorsque le bouton bascule
    const handleToggleChange = () => {
        // Toggle entre les ID utilisateur 12 et 18
        setUserId((prevUserId) => (prevUserId === 12 ? 18 : 12));
    };

    return (
        <section className="home-wrapper">
            <div className="home">
                <h1 className='home-title'>
                    Accueil{' '}
                    <span className="sportsee">
                        SportSee 
                    </span>
                </h1>
                <div className={`user-choice ${userId === 18 ? 'cecilia' : 'karl'}`}>
                    <h2>Choix de l'utilisateur</h2>
                    <div className="row">
                        <div className="toggle-button-cover">
                            <div className="button-cover">
                                <div className={`button r ${userId === 18 ? 'active' : ''}`} id="button-1" onClick={handleToggleChange}>
                                    <input type="checkbox" className='checkbox' checked={userId === 18} onChange={handleToggleChange => handleToggleChange === userId === 18} />
                                    <div className="knobs"></div>
                                    <div className="layer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;