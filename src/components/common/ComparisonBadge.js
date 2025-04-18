import React from 'react';
import Badge from './Badge';

/**
 * Badge component specifically for displaying comparison metrics
 * 
 * @param {Object} props Component props
 * @param {string} props.type Type of badge ('speed' or 'energy')
 * @param {number} props.value Value to display (percentage)
 * @param {boolean} props.showNA Whether to show N/A when value is undefined
 */
const ComparisonBadge = ({ 
  type = 'speed', 
  value,
  showNA = true
}) => {
  // Default configs
  const config = {
    speed: {
      text: `${value !== undefined ? value : 'N/A'}% Faster`,
      backgroundColor: 'rgba(243, 156, 18, 0.9)',
      icon: '⏱️',
      className: 'speed-badge'
    },
    energy: {
      text: `${value !== undefined ? value : 'N/A'}% Less Energy`,
      backgroundColor: 'rgba(46, 204, 113, 0.9)',
      icon: '🔋',
      className: 'energy-badge'
    }
  };
  
  const badgeConfig = config[type] || config.speed;
  
  return (
    <Badge
      text={badgeConfig.text}
      backgroundColor={badgeConfig.backgroundColor}
      icon={badgeConfig.icon}
      className={badgeConfig.className}
    />
  );
};

export default ComparisonBadge;