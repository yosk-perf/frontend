import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tag } from 'antd';

import CustomCard from './custom-card';

const getLogLevelColor = (logLevel) => {
  switch (logLevel) {
      case  'Error':
          return 'volcano';
      case 'Warning':
          return 'lime';
      default:
          return 'geekblue';
  }
};

const columns = [
    {
        title: 'Timestamp',
        dataIndex: 'timestamp',
        key: 'timestamp'
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
    }
];

const LogTable = ({data}) => {
    return (
        <CustomCard title={"Execution Log"}>
            <Table rowKey="id" columns={columns} dataSource={data} pagination={false}/>
        </CustomCard>
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
