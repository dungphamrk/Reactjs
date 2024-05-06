import React, { useState } from 'react';


function App() {
  const [theme, setTheme] = useState('yellow'); 
  const [language, setLanguage] = useState('english'); 


  const toggleTheme = () => {
    setTheme(theme === 'yellow' ? 'black' : 'yellow')
    console.log(theme)
  };

 
  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'vietnamese' : 'english');
    console.log(language);
    
  };

  return (
    <div >
        <br />
        <h1>Bai 9</h1>
      <h1 className={language} style={{ color: theme }}>
        {language === 'english' ? 'Hello' : 'Xin chào'}
   
      </h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
}

export default App;
