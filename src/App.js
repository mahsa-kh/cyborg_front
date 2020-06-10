import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import NetworkForm from './networkForm';
import FormContainer from "./containers/FormContainer";
import SiderLayout from "./containers/SiderLayout";
import { Layout, Menu, Icon } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
function App() {


  return (
    <div className="App">
   <SiderLayout/>



    </div>
  );
}

export default App;
