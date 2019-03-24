import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tag } from 'antd';

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
        title: 'File Name',
        dataIndex: 'fileName',
        key: 'fileName',
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
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
              <a href="javascript:;">Expand</a>
            </span>
        ),
    }
];

const mockData = [{
        key: '1',
        timestamp: '22/12/18 10:44:10',
        fileName: 'yosk.js',
        messagePayload: 'Log message bla bla',
        logLevel: 'Error',
    },
    {
        key: '2',
        timestamp: '22/12/18 10:44:10',
        fileName: 'yosk.js',
        messagePayload: 'Log message bla bla',
        logLevel: 'Info',
    },
    {
        key: '3',
        timestamp: '22/12/18 10:44:10',
        fileName: 'yosk.js',
        messagePayload: 'Log message bla bla',
        logLevel: 'Warning',
    },
];

const LogTable = ({data}) => {
    return (
        <div>
            <Table columns={columns} dataSource={mockData}  pagination={false}/>
        </div>
    );
};

LogTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        timestamp: PropTypes.string.isRequired,
        fileName: PropTypes.string.isRequired,
        messagePayload: PropTypes.string.isRequired,
        logLevel: PropTypes.string.isRequired,
    }))
};

export default LogTable;