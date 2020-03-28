import React from "react";

function Reference({ updatedDate = "--" }) {
  return (
    <small>
      <p>
        Last updated: <i>{updatedDate}</i>
      </p>
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
