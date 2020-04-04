import React, { useContext } from "react";
import { LanguageContext } from "../languageContext";
import { Button } from "@material-ui/core";

function LangSelector({ lang, setLang }) {
  const appLanguage = useContext(LanguageContext);
  return (
    <Button
      color="secondary"
      onClick={() => {
        //alert(appLanguage);
        //console.log(appLanguage.lang);
        setLang(appLanguage.lang === "ml" ? "en" : "ml");
      }}
    >
      {appLanguage.lang === "ml" ? "English" : "മലയാളം"}
    </Button>
  );
}

export default LangSelector;
