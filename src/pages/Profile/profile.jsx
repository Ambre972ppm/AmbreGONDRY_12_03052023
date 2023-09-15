import React, { useEffect } from 'react';
import { useFetch } from '../../utils/hooks';
import { useUser } from '../../utils/context/UserProvider/userProvider';
import ProfileFoodData from '../../components/ProfileFoodData/profileFoodData';
import ProfileHeader from '../../components/ProfileHeader/profileHeader';
import ProfileCharts from '../../components/ProfileCharts/profileCharts';
import './Profile.scss';

function Profile() {
  // Définir le titre de la page
  useEffect(() => {
    document.title = 'Profil - SportSee';
  }, []);

  // Récupération de l'ID utilisateur à partir du contexte
  const { userId } = useUser();

  // Récupération des données utilisateur depuis l'API ou des données simulées
  const user = useFetch(
    `http://localhost:3000/user/${userId}`,
    userId,
    '../../../public/mocked-data/user-main-data.json'
  );
  const activity = useFetch(
    `http://localhost:3000/user/${userId}/activity`,
    userId,
    '../../../public/mocked-data/user-activity.json'
  );
  const averageSessions = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`,
    userId,
    '../../../public/mocked-data/user-average-sessions.json'
  );
  const performance = useFetch(
    `http://localhost:3000/user/${userId}/performance`,
    userId,
    '../../../public/mocked-data/user-performance.json'
  );

  // Formatage des données depuis l'API ou des données simulées
  const formatData = (apiData) => {
    if (apiData.apiData) {
      return apiData.apiData;
    } else if (apiData.mockedData) {
      return apiData.mockedData;
    }
    return {}; // Retourner un objet vide par défaut si aucune donnée n'est disponible
  };

  // Formatage des données
  const userData = formatData(user);
  const activityData = formatData(activity);
  const averageSessionsData = formatData(averageSessions);
  const performanceData = formatData(performance);

  // Vérification si les données sont en cours de chargement
  const isLoading =
    user.isLoading ||
    activity.isLoading ||
    averageSessions.isLoading ||
    performance.isLoading;

  // Vérification s'il y a des erreurs dans les données
  const hasError =
    (user.errorAPI && user.errorMocked) ||
    (activity.errorAPI && activity.errorMocked) ||
    (averageSessions.errorAPI && averageSessions.errorMocked) ||
    (performance.errorAPI && performance.errorMocked);

  // Affichage d'un message de chargement si les données sont en cours de chargement
  if (isLoading) {
    return (
      <section className="profil-wrapper">
        <h2 className="center">Chargement...</h2>
      </section>
    );
  }

  // Affichage d'un message d'erreur si des erreurs se produisent dans les données
  if (hasError) {
    return (
      <section className="profil-wrapper">
        <h2 className="center">Une erreur est survenue !</h2>
      </section>
    );
  }

  // Afficher la page de profil avec les composants réutilisables si les données sont disponibles
  return (
    <section className="profil-wrapper">
      {userData && (
        <div className="profil">
          <ProfileHeader userFormatData={userData} />
          <div className="dashboard">
            <div className="dashboard-charts-wrapper">
              <ProfileCharts
                activityFormatData={activityData}
                averageSessionsFormatData={averageSessionsData}
                performanceFormatData={performanceData}
                userFormatData={userData}
              />
            </div>

            <aside className="dashboard-aside">
              <ProfileFoodData userFormatData={userData} />
            </aside>
          </div>
        </div>
      )}
    </section>
  );
}

export default Profile;
