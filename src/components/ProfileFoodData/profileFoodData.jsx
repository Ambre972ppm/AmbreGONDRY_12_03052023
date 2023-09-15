import React from 'react';
import FoodDataCard from '../FoodDataCard/foodDataCard';
import calories from '../../assets/icons/calories.svg';
import proteines from '../../assets/icons/proteines.svg';
import glucides from '../../assets/icons/glucides.svg';
import lipides from '../../assets/icons/lipides.svg';

function ProfileFoodData({ userFormatData }) {
    const { keyData } = userFormatData;
    return (
        <div className="profil-food-data">
            <FoodDataCard
                userKeyData={keyData.calorieCount}
                unit="kCal"
                subtitle="Calories"
                className="calorie"
                logo={calories}
            />
            <FoodDataCard
                userKeyData={keyData.proteinCount}
                unit="g"
                subtitle="Protéines"
                className="protein"
                logo={proteines}
            />
            <FoodDataCard
                userKeyData={keyData.carbohydrateCount}
                unit="g"
                subtitle="Glucides"
                className="carbohydrate"
                logo={glucides}
            />
            <FoodDataCard
                userKeyData={keyData.lipidCount}
                unit="g"
                subtitle="Lipides"
                className="lipid"
                logo={lipides}
            />
        </div>
    );
}

export default ProfileFoodData;