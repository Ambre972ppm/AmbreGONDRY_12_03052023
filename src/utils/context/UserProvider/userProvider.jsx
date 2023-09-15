// Import des dépendances nécessaires de React
import { createContext, useContext, useState } from 'react';

// Création d'un contexte utilisateur avec createContext()
const UserContext = createContext();

// Composant fournisseur de contexte utilisateur
export function UserProvider({ children }) {
  // Utilisation du hook useState pour gérer l'état local 'userId'
  const [userId, setUserId] = useState(12);

  // Retourne le contexte utilisateur avec 'userId' et 'setUserId' en tant que valeurs
  // Ces valeurs seront accessibles aux composants enfants enveloppés par ce fournisseur de contexte
  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook personnalisé pour accéder au contexte utilisateur
export function useUser() {
  // Utilisation du hook useContext pour accéder au contexte 'UserContext'
  // Cela permet d'obtenir les valeurs 'userId' et 'setUserId' définies dans le fournisseur
  return useContext(UserContext);
}
