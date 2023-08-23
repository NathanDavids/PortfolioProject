// ParentComponent.jsx
import React, { useState } from 'react';

function ParentComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <Home isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </>
  );
}

export default ParentComponent;