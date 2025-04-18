import React from 'react';
import PlaceholderContainer from './PlaceholderStates';
import CodeDisplay from './CodeDisplay';

/**
 * Component for displaying optimized code results
 */
const OptimizedCode = ({ 
  state, 
  code, 
  optimization,
  variants, 
  onShowComparison 
}) => {
  // If we're not in the "complete" state, show appropriate placeholder
  if (state !== 'complete') {
    return <PlaceholderContainer state={state} />;
  }
  
  // Prepare badge for the optimization score
  const badges = [{
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    text: optimization 
      ? `${optimization.context.replace('_', ' ').charAt(0).toUpperCase() + optimization.context.replace('_', ' ').slice(1)} Optimized`
      : '85% More Efficient',
    className: 'optimization-badge'
  }];
  
  // Prepare action buttons if we have variant comparisons
  const actions = [];
  if (variants && variants.fast_version && variants.green_version) {
    actions.push({
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 4h10v10" />
          <path d="m3 20 7-7" />
          <path d="M14 10v4" />
          <path d="M3 6h4" />
          <path d="M10 3v4" />
          <path d="M3 10h4" />
        </svg>
      ),
      text: 'See Speed vs. Green Comparison',
      onClick: onShowComparison,
      className: 'comparison-btn'
    });
  }
  
  return (
    <CodeDisplay 
      code={code} 
      badges={badges} 
      actions={actions} 
    />
  );
};

export default OptimizedCode;