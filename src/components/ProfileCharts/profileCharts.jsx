import React from 'react';
import ChartsCards from '../../components/ChartsCards/chartsCards'
import BarChartActivity from '../../components/BarChartActivity/barChartActivity'
import LineGraphSession from '../../components/LineGraphSession/lineGraphSession'
import DonutGoalChart from '../../components/DonutChartGoal/donutChartGoal'
import RadarChartPerformance from '../../components/RadarChartPerformance/radarChartPerformance'

function ProfileCharts({ activityFormatData, averageSessionsFormatData, performanceFormatData, userFormatData }) {
    return (

        <div className='profile-charts'>
            <div className="activity-charts">
            {activityFormatData && (
                <BarChartActivity
                    data={activityFormatData.sessions}
                />
            )}
            </div>
            <div className="small-card-wrapper">
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