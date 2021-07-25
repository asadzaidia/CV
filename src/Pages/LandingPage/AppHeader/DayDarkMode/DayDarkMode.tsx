/* eslint-disable max-len */
import React from "react";

type DayDarkModeType = {
  darkModeEnabled: boolean;
};

const DayDarkMode: React.FC<DayDarkModeType> = ({ darkModeEnabled }) => {
  const sunFill = darkModeEnabled ? "#F8A805" : "black";
  const borderFill = darkModeEnabled ? "#F5C525" : "red";
  return (
    <div>
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 420 420"
        enableBackground="new 0 0 420 420"
        width="50"
        height="50"
      >
        <g>
          <polygon
            style={{ fill: borderFill }}
            points="420,210 375.774,247.857 399.238,301.145 342.926,315.986 340.945,374.184 283.764,363.211
		256.724,414.779 210,380 163.276,414.779 136.236,363.211 79.055,374.184 77.073,315.986 20.762,301.144 44.226,247.858 0,210
		44.226,172.143 20.762,118.855 77.074,104.014 79.055,45.816 136.236,56.789 163.276,5.221 210,40 256.723,5.221 283.764,56.789
		340.945,45.816 342.927,104.014 399.238,118.856 375.774,172.142 	"
          />
          <circle style={{ fill: sunFill }} cx="210" cy="210" r="140" />
        </g>
      </svg>
    </div>
  );
};

export default DayDarkMode;
