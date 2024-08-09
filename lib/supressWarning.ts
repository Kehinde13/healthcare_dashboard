// suppressWarnings.js
const suppressWarnings = () => {
    const originalConsoleError = console.error;
  
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' &&
        args[0].includes('Warning: XAxis: Support for defaultProps will be removed')
      ) {
        return;
      }
      originalConsoleError(...args);
    };
  };
  
  export default suppressWarnings;
  