import React from 'react';

const UpperLayout = ({className, children}) => {
  return (
      <div className={className}>
          {children}
      </div>
  );
};

export default UpperLayout;