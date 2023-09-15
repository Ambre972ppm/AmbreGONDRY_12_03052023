import { useState, useEffect } from 'react';

// Un hook personnalisé pour effectuer des requêtes HTTP et gérer les données
export function useFetch(urlAPI, userId, urlMockedData) {
  // État pour stocker les données de l'API
  const [apiData, setApiData] = useState(null);
  // État pour stocker les données simulées (mockées)
  const [mockedData, setMockedData] = useState(null);
  // État pour gérer le chargement
  const [isLoading, setLoading] = useState(true);
  // État pour gérer les erreurs de l'API
  const [errorAPI, setErrorAPI] = useState(false);
  // État pour gérer les erreurs des données simulées (mockées)
  const [errorMocked, setErrorMocked] = useState(false);

  // Utilisation de useEffect pour effectuer les opérations asynchrones
  useEffect(() => {
    // Marquer le chargement comme actif
    setLoading(true);

    // Fonction asynchrone pour effectuer la requête de données
    async function fetchData(fetchURL, isDataMocked, errorSetState) {
      try {
        // Effectuer la requête HTTP
        const response = await fetch(fetchURL);
        // Analyser la réponse en tant que JSON
        const data = await response.json();

        // Si ce ne sont pas des données simulées (API réelle)
        if (isDataMocked === false) {
          setApiData(data.data);
        } else if (isDataMocked === true) {
          // Si des données simulées, recherchez les données pour l'utilisateur spécifié
          if (userId) {
            setMockedData(
              data.find(
                (item) =>
                  item.id === parseInt(userId) || item.userId === parseInt(userId)
              )
            );
          }
        }
      } catch (err) {
        console.log(err);
        // En cas d'erreur, si des données simulées sont disponibles, essayez de les obtenir
        if (urlMockedData) {
          fetchData(urlMockedData, true, setErrorMocked);
        }
        // Marquer une erreur
        errorSetState(true);
      } finally {
        // Marquer le chargement comme terminé, qu'il ait réussi ou échoué
        setLoading(false);
      }
    }

    // Appeler la fonction fetchData avec l'URL de l'API réelle
    fetchData(urlAPI, false, setErrorAPI);
  }, [urlAPI, userId, urlMockedData]);

  // Retourner les états et les données nécessaires en tant qu'objet
  return { isLoading, apiData, mockedData, errorAPI, errorMocked };
}
