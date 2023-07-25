import PropTypes from 'prop-types'

import './FoodDataCard.scss'

/**
 * Render a div (card) containing an image and text
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
function FoodDataCard({ userKeyData, unit, subtitle, className, logo }) {
	return (
		<div className="food-card-data ">
			<div className={'food-card-data-icon-wrapper ' + className}>
				<img src={logo} alt="" className="food-card-data-card-icon" />
			</div>
			<div className="food-card-data-wrapper">
				<p className="food-card-data-title">
					{userKeyData.toLocaleString('en-US')}
					{unit}
				</p>
				<p className="card-subtitle">{subtitle}</p>
			</div>
		</div>
	)
}

FoodDataCard.propTypes = {
	/**
	 * Data number to be displayed in the card
	 */
	userKeyData: PropTypes.number.isRequired,
	/**
	 * Unit of the data
	 */
	unit: PropTypes.string.isRequired,
	/**
	 * Subtitle of the card
	 */
	subtitle: PropTypes.string.isRequired,
	/**
	 * Class name of the card
	 */
	className: PropTypes.string,
	/**
	 * Logo path of the card
	 */
	logo: PropTypes.string.isRequired,
}

export default FoodDataCard
