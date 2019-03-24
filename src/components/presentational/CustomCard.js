import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import classNames from 'classnames';

import './CustomCard.css';

const CustomCard = ({title = "", loading = false, cardClass, children}) => {
    const mergedStyle = cardClass ? classNames('CustomCard', cardClass) : 'CustomCard';
    return (
        <Card className={mergedStyle} title={title} loading={loading}>
            {children}
        </Card>
    )
};

CustomCard.propTypes = {
    title: PropTypes.string,
    loading: PropTypes.bool,
    cardClass: PropTypes.string,
    children: PropTypes.any
};

export default CustomCard;