import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const styles = {
  card: {
      background: 'rgba(255, 255, 255, 0.82)',
  }
};

const CustomCard = ({title = "", loading = false, children}) => {
    return (
        <Card style={styles.card} title={title} loading={loading}>
            {children}
        </Card>
    )
};

CustomCard.propTypes = {
    title: PropTypes.string,
    loading: PropTypes.bool,
    children: PropTypes.any
};

export default CustomCard;