import PropTypes from 'prop-types';

import './ChartsCards.scss';

function ChartsCards({ className, content }) {
  // Le composant renvoie un élément div avec une classe définie par `className`
  // et le contenu passé en tant que propriété `content`.
  return <div className={'charts-card ' + className}>{content}</div>;
}

// Définition des types de propriétés attendues et de leurs validations
ChartsCards.propTypes = {
  className: PropTypes.string, // Une chaîne de caractères pour la classe CSS
  content: PropTypes.object.isRequired, // Un objet (ou tout autre type) requis
};

export default ChartsCards;
