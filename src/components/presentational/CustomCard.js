import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const styles = {
  card: {
      background: 'rgba(255, 255, 255, 0.82)',
  }
};

const CustomCard = ({title = "", children}) => {
    return (
        <Card style={styles.card} title={title}>
            {children}
        </Card>
    )
};

CustomCard.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
};

export default CustomCard;