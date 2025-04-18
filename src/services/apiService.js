/**
 * API Service for handling backend communication
 */

import config from '../config';

// Helper to log API calls in development mode
const logApiCall = (endpoint, requestData, responseData, error = null) => {
  if (process.env.NODE_ENV === 'development') {
    console.group(`API Call: ${endpoint}`);
    console.log('Request:', requestData);
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Response:', responseData);
    }
    console.groupEnd();
  }
};

/**
 * Call API to analyze and optimize code
 * @param {string} code - User's code to analyze
 * @param {string} context - Optimization context (energy_efficiency, memory_efficiency, etc)
 * @param {boolean} advanced - Use advanced analysis
 * @param {boolean} includeVariants - Include alternative optimization variants
 * @returns {Promise} - Promise with optimization results
 */
export const analyzeCode = async (code, context = 'energy_efficiency', advanced = true, includeVariants = true) => {
  const endpoint = '/analyze';
  const requestData = { code, context, advanced, variants: includeVariants };
  
  try {
    console.log(`Making API request to ${config.api.baseUrl}${config.api.endpoints.analyze}`);
    
    const response = await fetch(`${config.api.baseUrl}${config.api.endpoints.analyze}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server responded with status: ${response.status}. Details: ${errorText}`);
    }
    
    const responseData = await response.json();
    logApiCall(endpoint, requestData, responseData);
    
    // Validate required fields in the response
    if (!responseData.optimized_code) {
      console.warn('API response missing optimized_code field');
    }
    
    if (!responseData.optimization || !responseData.optimization.savings) {
      console.warn('API response missing optimization metrics');
    }
    
    return responseData;
  } catch (error) {
    logApiCall(endpoint, requestData, null, error);
    console.error('Error analyzing code:', error);
    throw error;
  }
};

// For dev/demo mode - return mock data when API isn't available
export const getMockAnalysisResults = (code) => {
  return {
    optimized_code: `def calculate_values(data):
    result = [item * 2 for item in data if item > 0]
    total = sum(result)
    return result, total`,
    analysis: {
      inefficiencies: [
        { line: 2, description: "Initializing empty list and using a loop can be replaced with list comprehension" },
        { line: 6, description: "Manual sum calculation can be replaced with built-in sum()" }
      ],
      complexity: {
        time: "O(n)",
        space: "O(n)"
      },
      greenscore: {
        original: 60,
        optimized: 85,
        improvement: 25
      }
    },
    algorithm_analysis: {
      improvements: ["Replaced loops with list comprehension", "Used built-in sum() function"],
      reasoning: "List comprehensions are more energy-efficient as they're optimized by Python internally."
    },
    optimization: {
      context: "energy_efficiency",
      savings: {
        energy: "58%",
        time: "42%",
        memory: "15%"
      }
    },
    variants: {
      fast_version: {
        code: `def calculate_values(data):
    filtered_data = [i for i in data if i > 0]
    result = [i * 2 for i in filtered_data]
    return result, sum(result)`,
        speed_boost: 45,
        energy_savings: 32
      },
      green_version: {
        code: `def calculate_values(data):
    # Process values in a single iteration to reduce energy
    result = []
    total = 0
    for item in data:
        if item > 0:
            doubled = item * 2
            result.append(doubled)
            total += doubled
    return result, total`,
        speed_boost: 30,
        energy_savings: 65
      }
    }
  };
};

export default {
  analyzeCode,
  getMockAnalysisResults
};