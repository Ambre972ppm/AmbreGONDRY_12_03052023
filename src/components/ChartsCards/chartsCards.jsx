import PropTypes from 'prop-types'

import './ChartsCards.scss'

/**
 * Render a div (charts-card) containing the charts
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
function ChartsCards({ className, content }) {
	return <div className={'charts-card ' + className}>{content}</div>
}

ChartsCards.propTypes = {
	/**
	 * Class name of the charts-card
	 */
	className: PropTypes.string,
	/**
	 * Content of the charts-card
	 */
	content: PropTypes.object.isRequired,
}

export default ChartsCards
