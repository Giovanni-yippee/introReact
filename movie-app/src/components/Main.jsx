import React, { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

const Main = () => {
  const { language, changeLanguage, translations } = useContext(LanguageContext);

  return (
    <div>
      <h1>{translations.greeting}</h1>
      <label htmlFor="lang-select">{translations.selectLanguage}:</label>
      <select
        id="lang-select"
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="kk">Қазақша</option>
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default Main;
