/**
 * API service module
 * Handles all interactions with the backend API
 */

import config from '../config';

/**
 * Analyze code for energy efficiency
 * 
 * @param {string} code - The code to be analyzed
 * @param {Object} options - Additional options
 * @param {boolean} options.advanced - Whether to use advanced analysis
 * @param {string} options.context - Optimization context (energy_efficiency, readability, etc.)
 * @param {string} options.model - Model to use for optimization
 * @returns {Promise<Object>} Analysis results
 */
export const analyzeCode = async (code, options = {}) => {
  const { 
    advanced = true, 
    context = 'energy_efficiency',
    model = config.defaultModel
  } = options;
  
  try {
    // If model is "mock", return mock data immediately
    if (model === "mock") {
      console.log('Using mock data (offline mode)');
      return getMockAnalysisResults(code, context);
    }
    
    // Otherwise use real API
    console.log('Using real API for code analysis');
    console.log(`Making API request to ${config.api.baseUrl}${config.api.endpoints.analyze}`);
    console.log('Code length:', code.length, 'Model:', model, 'Context:', context);
    
    // Prepare request URL
    const url = `${config.api.baseUrl}${config.api.endpoints.analyze}`;
    console.log('Full URL:', url);
    
    // Set up request with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.api.timeout);
    
    // Make API call
    console.log('About to send fetch request');
    const requestBody = { 
      code,
      advanced,
      context,
      variants: config.features.showVariants,
      model: model // Include the selected model
    };
    console.log('Request body:', JSON.stringify(requestBody).substring(0, 100) + '...');
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });
    
    console.log('Received response:', response.status, response.statusText);
    
    // Clear timeout
    clearTimeout(timeoutId);
    
    // Handle non-200 responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API returned error:', errorData);
      
      // Fall back to mock data
      console.log('Falling back to mock data due to API error');
      return getMockAnalysisResults(code, context);
    }
    
    // Parse and return the response data
    const responseData = await response.json();
    console.log('Parsed response data successfully');
    return responseData;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request timeout - falling back to mock data');
    } else {
      console.error('API Error:', error);
      console.error('Error details:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    console.log('Falling back to mock data due to error');
    return getMockAnalysisResults(code, context);
  }
};

/**
 * Check API health status
 * 
 * @returns {Promise<Object>} Health check response
 */
export const checkHealth = async () => {
  try {
    const response = await fetch(`${config.api.baseUrl}${config.api.endpoints.health}`);
    return await response.json();
  } catch (error) {
    console.error('Health check failed:', error);
    return { status: 'error', message: 'API is unreachable' };
  }
};

/**
 * Get available models for code optimization
 * 
 * @returns {Promise<Object>} List of available models
 */
export const getModels = async () => {
  try {
    // First try to get models from API
    const response = await fetch(`${config.api.baseUrl}${config.api.endpoints.models}`);
    
    if (response.ok) {
      return await response.json();
    } else {
      // Fall back to local models if API fails
      console.warn('Could not fetch models from API, using local fallback');
      return {
        models: Object.entries(config.models).map(([key, model]) => ({
          key,
          name: model.name,
          description: model.description,
          status: model.status || 'available'
        })),
        default_model: config.defaultModel
      };
    }
  } catch (error) {
    console.error('Failed to get models:', error);
    
    // Return local fallback models
    return {
      models: Object.entries(config.models).map(([key, model]) => ({
        key,
        name: model.name,
        description: model.description,
        status: model.status || 'available'
      })),
      default_model: config.defaultModel,
      error: error.message
    };
  }
};

/**
 * Clear the model cache on the server
 * 
 * @returns {Promise<Object>} Result of the operation
 */
export const clearModelCache = async () => {
  try {
    const response = await fetch(`${config.api.baseUrl}${config.api.endpoints.clearCache}`, {
      method: 'POST'
    });
    
    return await response.json();
  } catch (error) {
    console.error('Failed to clear model cache:', error);
    return { status: 'error', message: 'Failed to clear cache' };
  }
};

/**
 * Get mock analysis results for offline/fallback mode
 * 
 * @param {string} code - The original code
 * @param {string} context - Optimization context
 * @returns {Object} Mock analysis results
 */
export const getMockAnalysisResults = (code, context = 'energy_efficiency') => {
  // Generate optimized code based on context
  let optimizedCode;
  
  if (context === 'energy_efficiency') {
    optimizedCode = `def calculate_values(data):
    result = [item * 2 for item in data if item > 0]
    total = sum(result)
    return result, total`;
  } else if (context === 'memory_efficiency') {
    optimizedCode = `def calculate_values(data):
    # Process values in a single iteration to reduce memory
    result = []
    total = 0
    for item in data:
        if item > 0:
            doubled = item * 2
            result.append(doubled)
            total += doubled
    return result, total`;
  } else if (context === 'performance') {
    optimizedCode = `def calculate_values(data):
    # Pre-allocate the filtered array for better performance
    filtered_data = [item for item in data if item > 0]
    result = [item * 2 for item in filtered_data]
    return result, sum(result)`;
  } else if (context === 'readability') {
    optimizedCode = `def calculate_values(data):
    """Calculate doubled values for positive numbers and their sum."""
    # Get positive values multiplied by 2
    result = [item * 2 for item in data if item > 0]
    
    # Calculate the sum of all results
    total = sum(result)
    
    return result, total`;
  } else {
    // Default to energy efficiency
    optimizedCode = `def calculate_values(data):
    result = [item * 2 for item in data if item > 0]
    total = sum(result)
    return result, total`;
  }
  
  // Create mock response
  return {
    original_code: code,
    optimized_code: optimizedCode,
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
      context,
      savings: {
        energy: "58%",
        time: "42%",
        memory: "15%"
      }
    },
    energy_saved: "2.8",
    co2_saved: "1.5",
    green_score: {
      original: 60,
      optimized: 85,
      improvement: 25
    },
    variants: {
      trade_off: "The speed-optimized version prioritizes execution time by pre-filtering data and using multiple list comprehensions, which is slightly faster but uses more memory. The green version processes everything in a single loop, saving energy by reducing memory allocation but potentially running slightly slower.",
      recommended: "green",
      fast_version: {
        code: `def calculate_values(data):
    # Pre-filter positive values for faster processing
    filtered_data = [i for i in data if i > 0]
    result = [i * 2 for i in filtered_data]
    return result, sum(result)`,
        speed: 92,
        energy: 70,
        context: "Use when performance is critical, such as in user-facing applications or real-time processing.",
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
        speed: 75,
        energy: 88,
        context: "Ideal for background tasks, batch processing, or any scenario where energy efficiency is more important than speed.",
      }
    }
  };
};

export default {
  analyzeCode,
  checkHealth,
  getModels,
  clearModelCache,
  getMockAnalysisResults
};