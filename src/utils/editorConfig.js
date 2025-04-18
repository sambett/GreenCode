/**
 * Editor configuration file
 * Contains constants and utility functions for code editor components
 */

// Default code samples
export const defaultCode = `def calculate_values(data):
    result = []
    for item in data:
        if item > 0:
            result.append(item * 2)
    total = 0
    for r in result:
        total += r
    return result, total`;

// Optimization contexts
export const optimizationContexts = [
  { id: 'energy_efficiency', label: 'Energy Efficiency', icon: '⚡' },
  { id: 'memory_efficiency', label: 'Memory Efficiency', icon: '💾' },
  { id: 'performance', label: 'Performance', icon: '🚀' },
  { id: 'readability', label: 'Readability', icon: '📖' }
];

// Function to highlight code syntax for display
export const highlightCode = (line) => {
  // Simple syntax highlighting rules
  return line
    .replace(/def\s+([a-zA-Z0-9_]+)/g, '<span class="keyword">def</span> <span class="function">$1</span>')
    .replace(/return\s+/g, '<span class="keyword">return</span> ')
    .replace(/if\s+/g, '<span class="keyword">if</span> ')
    .replace(/for\s+/g, '<span class="keyword">for</span> ')
    .replace(/in\s+/g, '<span class="keyword">in</span> ')
    .replace(/sum\(/g, '<span class="function">sum</span>(')
    .replace(/\[\s*([^\]]*)\s*\]/g, '[<span class="value">$1</span>]');
};

// Format code for display with proper indentation and syntax highlighting
export const formatCodeForDisplay = (code) => {
  if (!code) return [];
  
  return code.split('\n').map((line, index) => {
    const indentMatch = line.match(/^(\s+)/);
    const indentClass = indentMatch 
      ? `indent-${Math.floor(indentMatch[0].length / 4)}` 
      : '';
    
    const highlightedLine = highlightCode(line);
    
    return {
      key: index,
      className: `code-line ${indentClass}`,
      html: highlightedLine
    };
  });
};

// API endpoints
export const apiEndpoints = {
  analyze: '/api/analyze'
};

export default {
  defaultCode,
  optimizationContexts,
  formatCodeForDisplay,
  highlightCode,
  apiEndpoints
};