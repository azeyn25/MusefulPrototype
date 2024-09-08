import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [age, setAge] = useState(18);
  const [language, setLanguage] = useState("Deutsch");
  const [sliderValue, setSliderValue] = useState("Scholar");
  const [selectedSlider, setSelectedSlider] = useState("Scholar"); // Ensure initial value

  return (
    <AppContext.Provider value={{ age, setAge, language, setLanguage, sliderValue, setSliderValue, selectedSlider, setSelectedSlider }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
