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



class FormContainer extends React.Component {
  formRef = React.createRef();

  constructor(props){
    super(props);

    this.state = {
      newDecoy: {
        name: "",
        description: "",
        config: "",
        ip: "",
        network: [],
        decoyTemplate: []
    },

    networkOptions: ['a', 'b', 'c'],
    decoyTemplateOptions: ['d1', 'd2', 'd3']
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSelectNetwork = this.handleSelectNetwork.bind(this);
    this.handleSelectDecTemp = this.handleSelectDecTemp.bind(this);

      // const [form] = Form.useForm();
  }

  handleFormSubmit(e) {
    // Form submission logic
    e.preventDefault();
    console.log('props works')
    let decoyData = this.state.newDecoy;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(decoyData),
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
      newDecoy: {
        name: "",
        description: "",
        config: "",
        ip: "",
        network: [],
        decoyTemplate: []
    }

    });
    console.log('Updated:  '+this.state.newDecoy.ip)
    console.log('Updated:  '+this.state.newDecoy.config)
  }

  handleInput(e) {
    // console.log("event   "+e)
    // console.log("target   "+e.target.value)
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newDecoy: {
          ...prevState.newDecoy,
          [name]: value
        }
      }),
      () => console.log(this.state.newDecoy)
    );
  }

    handleSelectNetwork(e) {

    this.setState(
      prevState => ({
        newDecoy: {
          ...prevState.newDecoy,
         network : e
        }
      }),
      () => console.log(this.state.newDecoy)
    );
  }

      handleSelectDecTemp(e) {

    this.setState(
      prevState => ({
        newDecoy: {
          ...prevState.newDecoy,
          decoyTemplate: e
        }
      }),
      () => console.log(this.state.newDecoy)
    );
  }



  render(){
    return(

      <Form {...layout} ref={this.formRef}
       onSubmit={this.handleFormSubmit}>
        <Form.Item
          name="network"
          label="Enter the network name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input name={"name"} title={"name"} inputType={"text"}
            value={this.state.newDecoy.name} handleChange={this.handleInput}
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
              value={this.state.newDecoy.description} handleChange={this.handleInput}
              placeholder={"Enter a description"} />
         </Form.Item>

         <Form.Item
          name="config"
          label="Enter the Network Configuration"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input name={"config"} title={"config"} inputType={"text"}
              value={this.state.newDecoy.config} handleChange={this.handleInput}
              placeholder={"Enter the Configuration"} />
         </Form.Item>

         <Form.Item
          name="ip"
          label="Enter the IP"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input name={"ip"} title={"IP"} inputType={"text"}
              value={this.state.newDecoy.ip} handleChange={this.handleInput}
              placeholder={"Enter the IP"} />
        </Form.Item>

        <Form.Item name="network" label="Choose Network" rules={[{ required: true }]}>
          <Select name={'network'}
                  title={' '}
                  value={this.state.newDecoy.network}
                  handleChange={this.handleSelectNetwork}
                  placeholder={'Choose a network'}
                  options = {this.state.networkOptions}
                />
        </Form.Item>

        <Form.Item name="decoyTemplate" label="Choose a Decoy Template" rules={[{ required: true }]}>
          <Select name={'decoyTemplate'}
                  title={''}
                  value={this.state.newDecoy.decoyTemplate}
                  handleChange={this.handleSelectDecTemp}
                  placeholder={'Choose a Decoy Template'}
                  options = {this.state.decoyTemplateOptions}
                  />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Cy_Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Create Decoy"}
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

  export default FormContainer;
