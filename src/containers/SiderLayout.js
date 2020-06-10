import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../style/form.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';

import FormContainer from "./FormContainer";
import NetworkForm from "./NetworkForm";
import DecoyTemplateForm from "./DecoyTemplateForm";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  NotificationOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  LaptopOutlined,
} from '@ant-design/icons';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderLayout extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      collapsed: false,
    };

    this.toggle = this.toggle.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

    onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
    <Router>
      <Layout>


        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
          mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            theme="dark" mode="inline">


              <SubMenu key="sub1" icon={<DesktopOutlined />} title="Networks" {...this.props}>
                <Menu.Item key="1">
                  Define a Network
                  <Link to="/NetworkForm" />
                </Menu.Item>
                <Menu.Item key="3">View Networks</Menu.Item>
              </SubMenu>

              <SubMenu key="sub2" icon={<VideoCameraOutlined />} title="Decoys" {...this.props}>
                <Menu.Item key="5">
                  Create a Decoy
                  <Link to="/FormContainer" />
                </Menu.Item>
                <Menu.Item key="6">View Decoys</Menu.Item>
              </SubMenu>


              <SubMenu key="sub3" icon={<NotificationOutlined />} title="Decoy Templates" {...this.props}>
                <Menu.Item key="8">
                  Create a Decoy Temp
                  <Link to="/DecoyTemplateForm" />
                </Menu.Item>
                <Menu.Item key="9">View Decoy Templates</Menu.Item>
              </SubMenu>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>

            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
              style: {paddingRight: 30}
            })}

          DECEPTION PANEL -- MOINTOR EVERY DETAIL
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >

            <Route exact path="/FormContainer" component={FormContainer} />
            <Route path="/NetworkForm" component={NetworkForm} />
            <Route path="/DecoyTemplateForm" component={DecoyTemplateForm} />

          </Content>

        </Layout>
      </Layout>
    </Router>

    );
  }
}

  export default SiderLayout;
