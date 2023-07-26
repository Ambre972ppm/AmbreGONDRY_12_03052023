import { useFetch } from '../../utils/hooks'
import FoodDataCard from '../../components/FoodDataCard/foodDataCard'
import ChartsCards from '../../components/ChartsCards/chartsCards'
import BarChartActivity from '../../components/BarChartActivity/barChartActivity'
import LineGraphSession from '../../components/LineGraphSession/lineGraphSession'
import DonutGoalChart from '../../components/DonutChartGoal/donutChartGoal'
import RadarChartPerformance from '../../components/RadarChartPerformance/radarChartPerformance'

import calories from '../../assets/icons/calories.svg'
import proteines from '../../assets/icons/proteines.svg'
import glucides from '../../assets/icons/glucides.svg'
import lipides from '../../assets/icons/lipides.svg'
import './Profile.scss';
import { useUser } from '../../utils/context/UserProvider/userProvider'

function Profile() {
  document.title = 'Profil - SportSee'

	const { userId } = useUser()

	// Fetch Data from Api or Mocked Data 
	const user = useFetch(
		`http://localhost:3000/user/${userId}`, // data from Api
		userId,
		'../../../public/mocked-data/user-main-data.json' // data from Mocked Data Json
	)
	const activity = useFetch(
		`http://localhost:3000/user/${userId}/activity`, // data from Api
		userId,
		'../../../public/mocked-data/user-activity.json' // data from Mocked Data Json
	)
	const averageSessions = useFetch(
		`http://localhost:3000/user/${userId}/average-sessions`, // data from Api
		userId,
		'../../../public/mocked-data/user-average-sessions.json' // data from Mocked Data Json
	)
	const performance = useFetch(
		`http://localhost:3000/user/${userId}/performance`, // data from Api
		userId,
		'../../../public/mocked-data/user-performance.json' // data from Mocked Data Json
	)

	const formatData = (dataObject, apiData) => {
		if (apiData.apiData) {
			dataObject = apiData.apiData
			return dataObject
		} 
		else if (apiData.mockedData) {
			dataObject = apiData.mockedData
			return dataObject
		}
	}

	/* Init the dataObject and format the data */
	let userData = {}
	userData = formatData(userData, user)
	let activityData = {}
	activityData = formatData(activityData, activity)
	let averageSessionsData = {}
	averageSessionsData = formatData(averageSessionsData, averageSessions)
	let performanceData = {}
	performanceData = formatData(performanceData, performance)

	/* If the data is loading, display a loading message to the user */
	if (
		user.isLoading ||
		activity.isLoading ||
		averageSessions.isLoading ||
		performance.isLoading
	) {
		return (
			<section className="profil-wrapper">
				<h2 className="center">Chargement...</h2>
			</section>
		)
	}

	/* If the fetches on the API and the mocked data returns errors, display a error message to the user */
	if (
		(user.errorAPI && user.errorMocked) ||
		(activity.errorAPI && activity.errorMocked) ||
		(averageSessions.errorAPI && averageSessions.errorMocked) ||
		(performance.errorAPI && performance.errorMocked)
	) {
		return (
			<section className="profil-wrapper">
				<h2 className="center">Une erreur est survenue !</h2>
			</section>
		)
	}

	return (
		<section className="profil-wrapper">
			{userData && (
				<div className="profil">
					<h2 className="profil-title">
						Bonjour{' '}
						<span className="profil-firstName">
							{userData.userInfos.firstName}
						</span>
					</h2>
					<p className="profil-subtitle">
						Félicitation ! Vous avez explosé vos objectifs hier 👏
					</p>
					<div className="dashboard">
						<div className="dashboard-charts-wrapper">
							<div className="activity-charts">
								{activityData && (
									<BarChartActivity
										data={activityData.sessions}
									/>
								)}
							</div>
							<div className="small-card-wrapper">
								{averageSessionsData && (
									<ChartsCards
										className="average-sessions"
										content={
											<LineGraphSession
												data={
													averageSessionsData.sessions
												}
											/>
										}
									/>
								)}

								{performanceData && (
									<ChartsCards
										className="performance"
										content={
											<RadarChartPerformance
												data={performanceData}
											/>
										}
									/>
								)}

								
								{userData && (
									<ChartsCards
										className="score"
										content={<DonutGoalChart data={userData} />}
									/>
								)}
							</div>
						</div>

						<aside className="dashboard-aside">
							<FoodDataCard
								userKeyData={userData.keyData.calorieCount}
								unit="kCal"
								subtitle="Calories"
								className="calorie"
								logo={calories}
							/>
							<FoodDataCard
								userKeyData={userData.keyData.proteinCount}
								unit="g"
								subtitle="Proteines"
								className="protein"
								logo={proteines}
							/>
							<FoodDataCard
								userKeyData={userData.keyData.carbohydrateCount}
								unit="g"
								subtitle="Glucides"
								className="carbohydrate"
								logo={glucides}
							/>
							<FoodDataCard
								userKeyData={userData.keyData.lipidCount}
								unit="g"
								subtitle="Lipides"
								className="lipid"
								logo={lipides}
							/>
						</aside>
					</div>
				</div>
			)}
		</section>
	)
}

export default Profile;
