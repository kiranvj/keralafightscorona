import React, { useContext } from "react";
import { FiClock } from "react-icons/fi";
import { LanguageContext } from "../languageContext";

function Reference({ updatedDate = "--" }) {
  const appLanguage = useContext(LanguageContext);
  return (
    <small>
      <FiClock size="1.25em" /> {appLanguage.lastUpdated}: <i>{updatedDate}</i>
      References:
      <br />
      <ol>
        <li>
          <a href="http://dhs.kerala.gov.in/" className="external">
            Directorate of Health Services,
            <br />
            Government of Kerala
          </a>
        </li>
        <li>
          <a href="https://www.mohfw.gov.in/" className="external">
            Ministry of Health and Family Welfare - Government of India
          </a>
        </li>
      </ol>
    </small>
  );
}

export default Reference;
