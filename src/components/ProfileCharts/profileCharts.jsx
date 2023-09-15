import React from 'react';
import ChartsCards from '../../components/ChartsCards/chartsCards';
import BarChartActivity from '../../components/BarChartActivity/barChartActivity';
import LineGraphSession from '../../components/LineGraphSession/lineGraphSession';
import DonutGoalChart from '../../components/DonutChartGoal/donutChartGoal';
import RadarChartPerformance from '../../components/RadarChartPerformance/radarChartPerformance';

function ProfileCharts({ activityFormatData, averageSessionsFormatData, performanceFormatData, userFormatData }) {
    return (
        <div className='profile-charts'>
            {/* Section pour afficher le graphique d'activité quotidienne */}
            <div className="activity-charts">
                {activityFormatData && (
                    <BarChartActivity
                        data={activityFormatData.sessions}
                    />
                )}
            </div>

            {/* Section pour afficher les petits graphiques de session moyenne, performance et score */}
            <div className="small-card-wrapper">
                {/* Graphique de session moyenne */}
                {averageSessionsFormatData && (
                    <ChartsCards
                        className="average-sessions"
                        content={
                            <LineGraphSession
                                data={averageSessionsFormatData.sessions}
                            />
                        }
                    />
                )}

                {/* Graphique de performance */}
                {performanceFormatData && (
                    <ChartsCards
                        className="performance"
                        content={
                            <RadarChartPerformance
                                data={performanceFormatData}
                            />
                        }
                    />
                )}

                {/* Graphique de score */}
                {userFormatData && (
                    <ChartsCards
                        className="score"
                        content={<DonutGoalChart data={userFormatData} />}
                    />
                )}
            </div>
        </div>
    );
}

export default ProfileCharts;
