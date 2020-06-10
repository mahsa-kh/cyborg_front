import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import NetworkForm from './networkForm';
import FormContainer from "./containers/FormContainer";
import SiderLayout from "./containers/SiderLayout";
import Cy_Table from "./components/Table";
import { Layout, Menu, Icon } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
const data = [
  {
    key: '1',
    firstName: 'Mahsa',
    lastName: 'Kgham',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },

];
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
    fetch('http://localhost:3000/api/v1/networks')
    .then(res => res.json())
    .then((data) => {
      this.setState({ networkList: data })
      console.log(this.state.networkList)
    })
    .catch(console.log)

        this.setState({
          networkList: data

    });
  }


  render(){
    return(
      <div>
       <SiderLayout/>
       <Cy_Table data={this.state.networkList}/>
      </div>
    );
  }
}

export default App;
