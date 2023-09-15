import { useFetch } from '../../utils/hooks'

import { useUser } from '../../utils/context/UserProvider/userProvider'

import ProfileFoodData from '../../components/ProfileFoodData/profileFoodData'
import ProfileHeader from '../../components/ProfileHeader/profileHeader'
import ProfileCharts from '../../components/ProfileCharts/profileCharts'

import './Profile.scss';

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
					<ProfileHeader userFormatData={userData} />
					<div className="dashboard">
						<div className="dashboard-charts-wrapper">
							<ProfileCharts 	activityFormatData={activityData} 
											averageSessionsFormatData={averageSessionsData} 
											performanceFormatData={performanceData} 
											userFormatData={userData} />
						</div>

						<aside className="dashboard-aside">
							<ProfileFoodData userFormatData={userData} />
						</aside>
					</div>
				</div>
			)}
		</section>
	)
}

export default Profile;
