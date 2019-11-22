import React from 'react';

const Logo = ({ textColor = '#555273', borderColor = '#555273', text = '' }) => (
  <svg viewBox="0 0 500 500" version="1.1" id="svg_null">
    <g id="root" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect id="background" fill="#FFF" x="0" y="0" width="500" height="500"></rect>
      <g id="Group" transform="translate(120.000000, 200.000000)">
        <rect id="Rectangle-11" x="0" y="0" width="260" height="100"></rect>
        <text
          id="headerText.primary"
          fontFamily="Inconsolata"
          fontSize="65.01128668171557"
          fontStyle="normal"
          fontWeight="700"
          line-spacing="90"
          fill={textColor}
          data-text-alignment="C"
          letterSpacing="NaN"
        >
          <tspan x="-0.0078125" y="71.5">
            {text}
          </tspan>
        </text>
      </g>
      <rect id="frame.primary" x="0" y="0" width="500" height="500" display="none" fill="#555273"></rect>
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        version="1.1"
        id="svg_frame.primary"
        x="0"
        y="0"
        fill={borderColor}
      >
        <g id="free" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            d="M60 60l0 380l380 0l0 -380l-380 0zm-10 -10l400 0l0 400l-400 0l0 -400z"
            id="frame.primary"
            fillRule="nonzero"
            fill={borderColor}
          ></path>
        </g>
      </svg>
    </g>
  </svg>
);

export default Logo;
