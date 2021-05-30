import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import { Row, Col, Card, Tooltip, Table } from 'antd';
import { Pie, WaterWave, Gauge, TagCloud } from '@/components/Charts';
import NumberInfo from '@/components/NumberInfo';
import CountDown from '@/components/CountDown';
import ActiveChart from '@/components/ActiveChart';
import numeral from 'numeral';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import Authorized from '@/utils/Authorized';
import styles from './Monitor.less';
import { TableProps } from "antd/lib/table";

const { Secured } = Authorized;

const targetTime = new Date().getTime() + 3900000;

// use permission as a parameter
const havePermissionAsync = new Promise(resolve => {
  // Call resolve on behalf of passed
  setTimeout(() => resolve(), 300);
});

@Secured(havePermissionAsync)
@connect(({ monitor, loading }) => ({
  monitor,
  loading: loading.models.monitor,
}))
class Monitor extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'monitor/fetchTags',
    });
  }

  render() {
    const { monitor, loading } = this.props;
    const { tags } = monitor;

    
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

    return (
      <GridContent>
        
        <Row gutter={24}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
              <Table dataSource={dataSource} columns={columns} />
              }
              bordered={false}
            />
          </Col>
          <Col xl={12} lg={14} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
              <Table dataSource={dataSource} columns={columns} />
              }
              bordered={false}
            />
          </Col>
          <Col xl={12} lg={14} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
              <Table dataSource={dataSource} columns={columns} />
              }
              bordered={false}
            />
          </Col>
          <Col xl={6} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
              <Table dataSource={dataSource} columns={columns} />
              }
              bordered={false}
            />
          </Col>
          <Col xl={6} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
              <Table dataSource={dataSource} columns={columns} />
              }
              bordered={false}
            />
          </Col>
          <Col xl={6} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
              <Table dataSource={dataSource} columns={columns} />
              }
              bordered={false}
            />
          </Col>
          <Col xl={6} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
              <Table dataSource={dataSource} columns={columns} />
              }
              bordered={false}
            />
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default Monitor;
