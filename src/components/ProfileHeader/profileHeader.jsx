import React from 'react';

function ProfileHeader({ userFormatData }) {
    return (
        <div className="profil-header">
            <h1 className="profil-title">
                Bonjour{' '}
                <span className="profil-firstName">
                    {userFormatData.userInfos.firstName}
                </span>
            </h1>
            <p className="profil-subtitle">
                Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
        </div>
    );
}

export default ProfileHeader;