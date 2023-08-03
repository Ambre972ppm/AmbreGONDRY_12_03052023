import { LineChart, Line, XAxis, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import CustomToolTip from './CustomToolTip';

function LineGraphSession({ data }) {
  const formatLabel = (value) => {
    if (value === 1) return 'L';
    if (value === 2) return 'M';
    if (value === 3) return 'M';
    if (value === 4) return 'J';
    if (value === 5) return 'V';
    if (value === 6) return 'S';
    if (value === 7) return 'D';
    return value;
  };

  return (
    <div>
      <h3 className='line-graph-session-title'>Durée moyenne des sessions</h3>
      <ResponsiveContainer width="90%" height={170} className={'responsive-container'}>
        <LineChart data={data}>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#linear-gradient)"
            strokeWidth={2}
            activeDot={{
              stroke: '#FFF',
              strokeWidth: 4,
              r: 2,
            }}
            dot={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: 'rgba(255,255,255,0.6)',
              fontSize: '0.75rem',
            }}
            tickFormatter={formatLabel}
            tickMargin={20}
          />
          <Tooltip content={<CustomToolTip />} cursor={false} />
          <YAxis hide domain={['dataMin-10', 'dataMax+10']} />
          <defs>
            <linearGradient id="linear-gradient" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

LineGraphSession.propTypes = {
  /**
   * Data to be displayed in the chart
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LineGraphSession;
