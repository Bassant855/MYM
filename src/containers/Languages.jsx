/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, createContext, useContext } from "react";

import { languageOptions, dictionaryList } from "../languages";

export const LanguageContext = createContext({
    userLanguage: "en",
    dictionary: dictionaryList.en,
});

export function LanguageProvider({ children }) {
    const defaultLanguage = window.localStorage.getItem("rcml-lang");
    const [userLanguage, setUserLanguage] = useState(defaultLanguage || "en");

    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: (selected) => {
            const newLanguage = selected === "ar" ? selected : "en";
            setUserLanguage(newLanguage);
            window.localStorage.setItem("rcml-lang", newLanguage);
        },
    };

    if (userLanguage === "ar") {
        document.body.classList.add("rtl");
    } else {
        document.body.classList.remove("rtl");
    }

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    );
}

export function Text({ tid }) {
    const languageContext = useContext(LanguageContext);
    const content =
        tid.split(".").reduce((o, i) => o[i], languageContext.dictionary) ||
        tid.split(".").reduce((o, i) => o[i], dictionaryList.en) ||
        "Something wrong in translation";

    return content;
}