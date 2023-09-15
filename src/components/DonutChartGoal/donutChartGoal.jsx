import React from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

import './DonutChartGoal.scss';

function DonutChartGoal({ data }) {
  // Récupère le score à partir des données passées en prop
  const score = data.todayScore ? data.todayScore : data.score;

  // Prépare les données pour le graphique (un seul segment)
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
          {/* Premier segment (barre) qui remplit tout le donut */}
          <RadialBar
            data={[{ value: 1 }]}
            dataKey="value"
            barSize={160}
            fill="#FFF" // Couleur du fond du donut
            isAnimationActive={false} // Désactive l'animation
          />
          {/* Deuxième segment (barre) qui représente le score */}
          <RadialBar
            dataKey="value"
            barSize={10}
            cornerRadius={100}
            fill="#FF0000" // Couleur du segment du score (rouge)
          />
        </RadialBarChart>
      </ResponsiveContainer>
      {/* Affiche le pourcentage du score par rapport à l'objectif */}
      <div className="donut-chart-goal-label center">
        <p className="percent">
          {/* Affiche le score sous forme de pourcentage */}
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
  data: PropTypes.object.isRequired, // Les données nécessaires au graphique
};

export default DonutChartGoal;
