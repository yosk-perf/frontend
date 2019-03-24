import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tag } from 'antd';
import CustomCard from "../custom-card/custom-card";

const getLogLevelColor = (logLevel) => {
  switch (logLevel) {
      case  'error':
          return 'volcano';
      case 'warning':
          return 'lime';
      case 'debug':
          return 'green';
      default:
          return 'geekblue';
  }
};

const columns = [
    {
        title: 'Timestamp',
        dataIndex: 'timestamp',
        key: 'timestamp',
        sorter: (a, b) => (new Date(a.timestamp) - new Date(b.timestamp)),
        sortDirections: ['descend', 'ascend'],
        render: date => new Date(date).toLocaleString().split(',')[1]
    },
    {
        title: 'Log Level',
        key: 'logLevel',
        dataIndex: 'logLevel',
        render: tag => (
            <span>
            <Tag color={getLogLevelColor(tag)} key={tag}>{tag.toUpperCase()}</Tag>
        </span>
        ),
        sorter: (a, b) => (a.logLevel.localeCompare(b.logLevel)),
        sortDirections: ['descend', 'ascend']
    },
    {
        title: 'Message',
        dataIndex: 'messagePayload',
        key: 'messagePayload',
        render: message => (
            <div style={{fontFamily: "'Inconsolata', monospace"}}>
                <span>{message}</span>
            </div>
        )
    }
];

const LogTable = ({data}) => {
    return (
        <Table scroll={{x: true, y: 400}} rowKey="id" columns={columns} dataSource={data} pagination={false}/>
    );
};

LogTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        timestamp: PropTypes.string.isRequired,
        messagePayload: PropTypes.string.isRequired,
        logLevel: PropTypes.string.isRequired,
    }))
};

export default LogTable;
