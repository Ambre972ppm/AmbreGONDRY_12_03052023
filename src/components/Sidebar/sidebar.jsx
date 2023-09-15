import './SideBar.scss'; // Import du fichier SCSS pour styliser le composant
import Yoga from '../../assets/icons/yoga.svg'; // Import de l'icône Yoga depuis les assets
import Swimming from '../../assets/icons/nager.svg'; // Import de l'icône Natation depuis les assets
import Biking from '../../assets/icons/pedaler.svg'; // Import de l'icône Vélo depuis les assets
import Fitness from '../../assets/icons/haltere.svg'; // Import de l'icône Fitness depuis les assets

function Sidebar() {
  return (
    <aside className="Sidebar"> {/* Conteneur principal de la barre latérale */}
      <div className="sidebar-buttons center"> {/* Conteneur des boutons de la barre latérale */}
        <button className="sidebar-button">
          <img src={Yoga} alt="" className="sidebar-button-logo" /> {/* Bouton Yoga */}
        </button>
        <button className="sidebar-button">
          <img src={Swimming} alt="" className="sidebar-button-logo" /> {/* Bouton Natation */}
        </button>
        <button className="sidebar-button">
          <img src={Biking} alt="" className="sidebar-button-logo" /> {/* Bouton Vélo */}
        </button>
        <button className="sidebar-button">
          <img src={Fitness} alt="" className="sidebar-button-logo" /> {/* Bouton Fitness */}
        </button>
      </div>
      <p className="copyright">Copyright, SportSee 2020</p> {/* Texte de copyright */}
    </aside>
  );
}

export default Sidebar; // Export du composant Sidebar
