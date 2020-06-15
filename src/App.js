import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import NetworkForm from './networkForm';
import FormContainer from "./containers/FormContainer";
import SiderLayout from "./containers/SiderLayout";
import NetTable from "./components/NetworkTable";
import { Layout, Menu, Icon } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
// const data = [
//   {
//     key: '1',
//     name: 'Net1',
//     description: 'Kgham',
//     vlan: 32,
//     subnet: 'New York No. 1 Lake Park',
//     asset: 'asset1',
//     gateway: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Net1',
//     description: 'Kgham',
//     vlan: 32,
//     subnet: 'New York No. 1 Lake Park',
//     asset: 'asset1',
//     gateway: ['nice', 'developer'],
//   },

// ];

class App extends React.Component {

   constructor(props){
    super(props);

    this.state = {
    networkList: [],
    decoyList: [],
    decoyTemplateList: []
  }

   }



   componentDidMount() {


fetch('http://localhost:3000/api/v1/networks', {

  mode: 'no-cors',// or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error&&:', error);
});



    fetch('http://localhost:3000/api/v1/networks',  {
  mode: 'no-cors'})
    .then(res => res.json())
    .then((data) => {
      console.log('******************     hey : ');
      this.setState({ networkList: data });
      console.log('******************     data : '+data);
      console.log(this.state.networkList);
    })
    .catch(console.log)

    console.log('******************'+this.state.networkList);

// getting decoy api data and set to state
//     fetch('http://localhost:3000/api/v1/decoys',  {
//   mode: 'no-cors' // 'cors' by default
// })
//     .then(res => res.json())
//     .then((data) => {
//       this.setState({ decoyList: data })
//       console.log(this.state.decoyList)
//     })
//     .catch(console.log)

// // getting decoy template api data and set to state
//     fetch('http://localhost:3000/api/v1/decoyTemplate',  {
//   mode: 'no-cors' // 'cors' by default
// })
//     .then(res => res.json())
//     .then((data) => {
//       this.setState({ decoyTemplateList: data })
//       console.log(this.state.decoyTemplateList)
//     })
//     .catch(console.log)

    //     this.setState({
    //       networkList: data

    // });

  }


  render(){
    return(

      <div>

       <SiderLayout datanet={this.state.networkList} datadec={this.state.networkList} />

      </div>
    );
  }
}

export default App;
