import React from "react";
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

export default class NetTable extends React.Component {

 constructor(props){
   super(props);

   }


  render(){
    return(
      <Table dataSource={this.props.data}>

          <Column title="Network Name" dataIndex="name" key="name" />
          <Column title="Network Description" dataIndex="description" key="description" />

        <Column title="VLAN" dataIndex="vlan" key="vlan" />
        <Column title="Subnet" dataIndex="subnet" key="subnet" />
        <Column title="Asset" dataIndex="asset" key="asset" />
        <Column title="Gateway" dataIndex="gateway" key="gateway" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Edit {record.name}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
      );
  }
}
