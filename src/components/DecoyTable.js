// import React from "react";
// import { Table, Tag, Space } from 'antd';

// const { Column, ColumnGroup } = Table;
// // const data = [
// //   {
// //     key: '1',
// //     firstName: 'John',
// //     lastName: 'Brown',
// //     age: 32,
// //     address: 'New York No. 1 Lake Park',
// //     tags: ['nice', 'developer'],
// //   },
// //   {
// //     key: '2',
// //     firstName: 'Jim',
// //     lastName: 'Green',
// //     age: 42,
// //     address: 'London No. 1 Lake Park',
// //     tags: ['loser'],
// //   },
// //   {
// //     key: '3',
// //     firstName: 'Joe',
// //     lastName: 'Black',
// //     age: 32,
// //     address: 'Sidney No. 1 Lake Park',
// //     tags: ['cool', 'teacher'],
// //   },
// // ];

// export default class DecoyTable extends React.Component {

//  constructor(props){
//    super(props);

//    // this.getHeader = this.getHeader.bind(this);
//    // this.getRowsData = this.getRowsData.bind(this);
//    // this.getKeys = this.getKeys.bind(this);
//    }

//   render(){
//     return(
//       <Table dataSource={this.props.data}>
//         <ColumnGroup title="Name">
//           <Column title="First Name" dataIndex="network" key="network" />
//           <Column title="Last Name" dataIndex="lastName" key="lastName" />
//         </ColumnGroup>
//         <Column title="Age" dataIndex="age" key="age" />
//         <Column title="Address" dataIndex="address" key="address" />
//         <Column
//           title="Tags"
//           dataIndex="tags"
//           key="tags"
//           render={tags => (
//             <>
//               {tags.map(tag => (
//                 <Tag color="blue" key={tag}>
//                   {tag}
//                 </Tag>
//               ))}
//             </>
//           )}
//         />
//         <Column
//           title="Action"
//           key="action"
//           render={(text, record) => (
//             <Space size="middle">
//               <a>Invite {record.lastName}</a>
//               <a>Delete</a>
//             </Space>
//           )}
//         />
//       </Table>
//       );
//   }
// }
