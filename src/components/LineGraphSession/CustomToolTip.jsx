import PropTypes from 'prop-types';

function CustomToolTip({ active, payload }) {
  if (active && payload && payload.length) {
    // Si le tooltip est actif et qu'il y a des données dans le payload
    return (
      <div className="tooltip">
        {/* Affiche la valeur du tooltip avec ' min' à la fin */}
        <p>{payload[0].value + ' min'}</p>
      </div>
    );
  }
  // Si le tooltip n'est pas actif ou s'il n'y a pas de données dans le payload, retourne null
  return null;
}

CustomToolTip.propTypes = {
  /**
   * Indique si le tooltip est actif ou non
   */
  active: PropTypes.bool,

  /**
   * Tableau de données dans le payload du tooltip
   */
  payload: PropTypes.arrayOf(PropTypes.object),
};

export default CustomToolTip;
