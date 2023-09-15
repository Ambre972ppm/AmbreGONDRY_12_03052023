// Import de PropTypes pour spécifier les types des propriétés
import PropTypes from 'prop-types';

// Définition du composant CustomToolTip avec deux propriétés : "active" et "payload"
function CustomToolTip({ active, payload }) {
  // Vérifie si le tooltip est actif et s'il y a des données dans le payload
  if (active && payload && payload.length) {
    return (
      // Div contenant le tooltip
      <div className="tooltip">
        {/* Paragraphe affichant la valeur du poids (en kg) */}
        <p>{payload[0].value + 'kg'}</p>
        {/* Paragraphe affichant la valeur des calories (en kCal) */}
        <p>{payload[1].value + 'Kcal'}</p>
      </div>
    );
  }
  // Renvoie null si le tooltip n'est pas actif ou s'il n'y a pas de données dans le payload
  return null;
}

// Spécification des types de propriétés attendues
CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
}

// Export du composant CustomToolTip
export default CustomToolTip;
