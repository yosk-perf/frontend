import React from 'react';
import PropTypes from 'prop-types';

const AppContent = ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
};

AppContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default AppContent;