import React from 'react';

function ProfileHeader({ userFormatData }) {
    return (
        <div className="profil-header">
            {/* Titre du profil avec le prénom de l'utilisateur */}
            <h1 className="profil-title">
                Bonjour{' '}
                <span className="profil-firstName">
                    {userFormatData.userInfos.firstName}
                </span>
            </h1>
            
            {/* Sous-titre de félicitations */}
            <p className="profil-subtitle">
                Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
        </div>
    );
}

export default ProfileHeader;