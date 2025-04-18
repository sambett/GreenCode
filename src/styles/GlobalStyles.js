import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #2ecc71;
    --primary-dark: #27ae60;
    --primary-light: #eaffef;
    --secondary: #3498db;
    --dark: #2c3e50;
    --light: #ecf0f1;
    --warning: #e74c3c;
    --success: #27ae60;
    --background: #f9f9f9;
    --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    --hover-shadow: 0 15px 35px rgba(46, 204, 113, 0.2);
    --border-radius: 12px;
    --border-radius-sm: 8px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: var(--background);
    color: var(--dark);
    min-height: 100vh;
  }

  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--dark);
    font-weight: 600;
    line-height: 1.3;
  }

  p {
    line-height: 1.6;
    color: #555;
  }

  /* Link Styles */
  a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--primary-dark);
  }

  /* Button Styles */
  .btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: var(--border-radius-sm);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(46, 204, 113, 0.2);
  }

  .btn:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(46, 204, 113, 0.3);
  }

  .btn:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(46, 204, 113, 0.2);
  }

  @keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 4px 6px rgba(46, 204, 113, 0.2); }
    50% { transform: scale(1.05); box-shadow: 0 8px 15px rgba(46, 204, 113, 0.4); }
    100% { transform: scale(1); box-shadow: 0 4px 6px rgba(46, 204, 113, 0.2); }
  }

  .btn-pulse {
    animation: pulse 2s infinite;
  }

  .btn-secondary {
    background-color: white;
    color: var(--primary);
    border: 2px solid var(--primary);
    margin-left: 10px;
  }

  .btn-secondary:hover {
    background-color: var(--primary-light);
    color: var(--primary-dark);
    border-color: var(--primary-dark);
  }

  /* Card and Section Styles */
  .card {
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--card-shadow);
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: var(--hover-shadow);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .app-container {
      padding: 15px;
    }
    
    .btn {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
`;