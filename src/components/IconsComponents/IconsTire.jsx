import React from 'react';

export default function IconsTire({ size = 28, className = "" }) {
  return (
    <div className={className}>
      <img src="/icons/tire.png" width={size} height={size} alt="Tire Icon" />
    </div>
  );
}
