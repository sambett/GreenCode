/**
 * Application configuration
 * Central place to manage environment-specific settings
 */

const config = {
  // API configuration
  api: {
    // Base URL for API requests
    // Use environment variable if available, otherwise fallback to development URL
    baseUrl: process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000',
    
    // API endpoints
    endpoints: {
      analyze: '/analyze',
      health: '/health',
      models: '/models',
      clearCache: '/clear-cache'
    },
    
    // Request timeout in milliseconds (30 seconds)
    timeout: 30000
  },

  // Feature flags
  features: {
    // Enable advanced analysis features
    advancedAnalysis: true,
    // Show optimization variants (fast vs. green)
    showVariants: true,
    // Enable model selection
    modelSelection: true,
    // Use API for actual analysis vs. mock data for development
    useRealApi: true // Always use real API
  },
  
  // Model configurations
  models: {
    mock: {
      key: "mock",
      name: "Mock Data (Offline Mode)",
      description: "Uses simulated data for offline testing"
    },
    huggingface: {
      key: "huggingface",
      name: "Hugging Face Phi-2",
      description: "Uses Microsoft Phi-2 model via Hugging Face Inference API"
    },
    openai: {
      key: "openai",
      name: "OpenAI",
      description: "Uses OpenAI API for code optimization"
    },
    starcoder1b: {
      key: "starcoder1b",
      name: "StarCoder 1B (Pending)",
      description: "1B parameter model - Faster but less accurate",
      status: "pending"
    },
    starcoder3b: {
      key: "starcoder3b",
      name: "StarCoder 3B (Pending)",
      description: "3B parameter model - Better accuracy, slower inference",
      status: "pending"
    },
    codegen350m: {
      key: "codegen350m",
      name: "CodeGen 350M (Pending)",
      description: "350M parameter model - Fast, lightweight optimization",
      status: "pending"
    }
  },
  
  // Default model to use
  defaultModel: "huggingface"
};

export default config;