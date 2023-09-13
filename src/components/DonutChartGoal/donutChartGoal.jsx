import React from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

import './DonutChartGoal.scss';

function DonutChartGoal({ data }) {
  const score = data.todayScore ? data.todayScore : data.score;
  const dataArray = [{ name: 'score', value: score }];
  return (
    <>
      <h3 className="donut-chart-goal-title">Score</h3>
      <ResponsiveContainer width="100%" height="100%" className="responsive-container">
        <RadialBarChart
          innerRadius="0%"
          outerRadius="0%"
          data={dataArray}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            data={[{ value: 1 }]}
            dataKey="value"
            barSize={160}
            fill="#FFF"
            isAnimationActive={false}
          />
          <RadialBar
            dataKey="value"
            barSize={10}
            cornerRadius={100}
            fill="#FF0000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="donut-chart-goal-label center">
        <p className="percent">
          {data.score && data.score * 100}
          {data.todayScore && data.todayScore * 100}%
        </p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </>
  );
}

DonutChartGoal.propTypes = {
  
  data: PropTypes.object.isRequired,
};

export default DonutChartGoal;