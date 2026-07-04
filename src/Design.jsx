import React from "react";

function DesignBadge() {
return (
    <div style={badgeStyle}>
    <span style={dotStyle}></span>
    <p style={textStyle}>New Update Live</p>
    </div>
);
}

const badgeStyle = {
 display: 'inline-flex',
 alignItems: 'center',
 gap: '8px',
  backgroundColor: '#e0f2fe',
  color: '#0369a1',
  padding: '6px 16px',
  borderRadius: '20px',
  fontFamily: 'sans-serif',
  fontWeight: '600',
  fontSize: '14px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
};

const dotStyle = {
  width: '8px',
  height: '8px',
  backgroundColor: '#0ea5e9',
  borderRadius: '50%'
};

const textStyle = {
    margin: 0
};

export default DesignBadge;