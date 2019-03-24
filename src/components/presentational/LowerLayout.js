import React from 'react';

const LowerLayout = ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default LowerLayout;