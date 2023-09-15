import PropTypes from 'prop-types';
import './FoodDataCard.scss';

function FoodDataCard({ userKeyData, unit, subtitle, className, logo }) {
  return (
    <div className="food-card-data">
      <div className={'food-card-data-icon-wrapper ' + className}>
        <img src={logo} alt="" className="food-card-data-card-icon" />
      </div>
      <div className="food-card-data-wrapper">
        <p className="food-card-data-title">
          {/* Affiche les données de l'utilisateur avec formatage en tant que nombre avec des milliers séparés */}
          {userKeyData.toLocaleString('en-US')}
          {unit}
        </p>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

// Propriétés attendues avec leurs types
FoodDataCard.propTypes = {
  userKeyData: PropTypes.number.isRequired, // Données numériques de l'utilisateur (nombre)
  unit: PropTypes.string.isRequired, // Unité de mesure (par exemple, 'g' ou 'kcal')
  subtitle: PropTypes.string.isRequired, // Sous-titre de la carte (texte descriptif)
  className: PropTypes.string, // Classe CSS optionnelle pour personnaliser le composant
  logo: PropTypes.string.isRequired, // URL de l'icône associée aux données nutritionnelles
};

export default FoodDataCard;
