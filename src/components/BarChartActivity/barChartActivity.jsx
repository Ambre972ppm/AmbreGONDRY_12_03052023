// Import des bibliothèques et des composants nécessaires depuis recharts et prop-types
import { XAxis, Tooltip, BarChart, CartesianGrid, YAxis, Bar, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

// Import du composant personnalisé CustomToolTip
import CustomToolTip from './CustomToolTip';

// Import du fichier de style
import './BarChartActivity.scss';

// Définition du composant BarChartActivity avec une seule propriété "data"
function BarChartActivity({ data }) {
  return (
    <>
      {/* Titre du graphique */}
      <h3 className="chartactivity-title">Activité quotidienne</h3>

      {/* Conteneur responsive pour le graphique */}
      <ResponsiveContainer width="100%" height="100%">

        {/* BarChart de recharts avec différentes configurations */}
        <BarChart data={data} barSize={7} barGap={8}>

          {/* Grille cartésienne pour le graphique */}
          <CartesianGrid strokeDasharray="3" vertical={false} />

          {/* Axe X avec des configurations spécifiques */}
          <XAxis
            dataKey="day"
            tick={{ fill: '#9B9EAC' }}
            tickLine={false}
            stroke="#DEDEDE"
            strokeWidth={2}
            tickMargin={16}
            tickFormatter={(day) => new Date(day).getDate()}
          />

          {/* Axe Y pour le kilogramme (à droite) */}
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            tickMargin={30}
            tick={{ fill: '#9B9EAC' }}
            tickLine={false}
            axisLine={false}
            domain={['dataMin-2', 'dataMax+1']}
            tickCount={3}
          />

          {/* Axe Y pour les calories (masqué) */}
          <YAxis hide yAxisId="calories" />

          {/* Tooltip personnalisé avec le composant CustomToolTip */}
          <Tooltip
            content={<CustomToolTip />}
            cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
          />

          {/* Barre pour le poids (kg) */}
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            yAxisId="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
          />

          {/* Barre pour les calories brûlées (kCal) */}
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
          />

          {/* Légende du graphique */}
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="10"
            height={80}
          />

        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

// Spécification des types de propriétés attendues
BarChartActivity.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default BarChartActivity;
