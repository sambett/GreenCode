import { useState, useCallback } from 'react';
import { analyzeCode, getMockAnalysisResults } from '../services/apiService';
import config from '../config';

/**
 * Custom hook for code optimization operations
 * This centralizes all API-related logic for code optimization
 */
const useCodeOptimization = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [state, setState] = useState('initial'); // 'initial', 'loading', 'complete', 'error'

  /**
   * Optimize the provided code
   */
  const optimizeCode = useCallback(async (
    code, 
    context = 'energy_efficiency', 
    useAdvanced = true, 
    showVariants = true
  ) => {
    if (!code || code.trim() === '') {
      setError('Please enter code to analyze');
      setState('error');
      return null;
    }

    setIsOptimizing(true);
    setState('loading');
    setError(null);

    try {
      let data;
      
      // Use real API if enabled, otherwise use mock data
      if (config.features.useRealApi) {
        console.log('Using real API for code analysis...');
        try {
          data = await analyzeCode(
            code, 
            context, 
            useAdvanced, 
            showVariants
          );
        } catch (apiError) {
          console.error('API Error:', apiError);
          // If API fails, fall back to mock data with a warning
          setError(`API Error: ${apiError.message}. Using simulated data instead.`);
          data = getMockAnalysisResults(code);
        }
      } else {
        // Use mock data for demo/development
        console.log('Using mock data for code analysis...');
        data = getMockAnalysisResults(code);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Validate response data
      if (!data || !data.optimized_code) {
        throw new Error('Invalid response data received');
      }
      
      // Store results
      setResults(data);
      
      // Log the metrics for debugging
      console.log('Optimization Metrics:', {
        greenscore: data.analysis?.greenscore,
        savings: data.optimization?.savings
      });
      
      // Dispatch event for other components (like metrics)
      if (window.dispatchEvent) {
        window.dispatchEvent(new CustomEvent('codeOptimized', { 
          detail: data 
        }));
      }
      
      setState('complete');
      return data;
    } catch (error) {
      console.error('Error optimizing code:', error);
      setError(`Failed to optimize code: ${error.message}`);
      setState('error');
      return null;
    } finally {
      setIsOptimizing(false);
    }
  }, []);

  /**
   * Reset the optimization state
   */
  const resetOptimization = useCallback(() => {
    setResults(null);
    setError(null);
    setState('initial');
  }, []);

  return {
    optimizeCode,
    resetOptimization,
    isOptimizing,
    results,
    error,
    state
  };
};

export default useCodeOptimization;