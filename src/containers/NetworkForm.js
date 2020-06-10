import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../style/form.css';
import Input from '../components/Input';
import Select from '../components/Select';
import Cy_Button from '../components/Button';
import { Form } from 'antd';
import { FormInstance } from 'antd/lib/form';

const { Option } = Select;


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};



class NetworkForm extends React.Component {
  formRef = React.createRef();

  constructor(props){
    super(props);

    this.state = {
      newNetwork: {
        name: "",
        vlan: "",
        description: "",
        asset: "",
        subnet: "",
        gateway: ""
      }
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);

      // const [form] = Form.useForm();
  }

  handleFormSubmit(e) {
    // Form submission logic
    e.preventDefault();
    let networkData = this.state.newNetwork;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(networkData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }


  handleClearForm(e) {
    // Logic for resetting the form
    e.preventDefault();
    console.log('in handleClearForm')
    this.setState({
      newNetwork: {
        name: "",
        vlan: "",
        description: "",
        asset: "",
        subnet: "",
        gateway: ""
      }

    });
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newDecoy: {
          ...prevState.newNetwork,
          [name]: value
        }
      }),
      () => console.log(this.state.newNetwork)
    );
  }



  render(){
    return(

      <Form {...layout} ref={this.formRef}
       onSubmit={this.handleFormSubmit}>
        <Form.Item
          name="name"
          label="Enter the network name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input name={"name"} title={"name"} inputType={"text"}
            value={this.state.newNetwork.name} handleChange={this.handleInput}
            placeholder={"Enter the network name"} />
         </Form.Item>
        <Form.Item
          name="description"
          label="Enter the network description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input name={"description"} title={"description"} inputType={"text"}
              value={this.state.newNetwork.description} handleChange={this.handleInput}
              placeholder={"Enter a description"} />
         </Form.Item>

         <Form.Item
          name="vlan"
          label="Enter the Network VLAN"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input name={"vlan"} title={"vlan"} inputType={"text"}
              value={this.state.newNetwork.vlan} handleChange={this.handleInput}
              placeholder={"Enter VLAN"} />
         </Form.Item>

        <Form.Item
          name="asset"
          label="Enter the Network Asset"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input name={"asset"} title={"asset"} inputType={"text"}
              value={this.state.newNetwork.asset} handleChange={this.handleInput}
              placeholder={"Asset"} />
         </Form.Item>

         <Form.Item
          name="subnet"
          label="Enter the Network subnet"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input name={"subnet"} title={"subnet"} inputType={"text"}
              value={this.state.newNetwork.subnet} handleChange={this.handleInput}
              placeholder={"Enter VLAN"} />
         </Form.Item>

         <Form.Item
          name="gateway"
          label="Enter the Network gateway"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input name={"gateway"} title={"gateway"} inputType={"text"}
              value={this.state.newNetwork.gateway} handleChange={this.handleInput}
              placeholder={"Enter VLAN"} />
         </Form.Item>


        <Form.Item {...tailLayout}>
          <Cy_Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Create Network"}
          />


          <Cy_Button
          action={this.handleClearForm}
          type={""}
          title={"Clear"}
          />

        </Form.Item>
      </Form>
      );
  }

}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

  export default NetworkForm;
