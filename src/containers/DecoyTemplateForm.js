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



class DecoyTemplateForm extends React.Component {
  formRef = React.createRef();

  constructor(props){
    super(props);

    this.state = {
      newDecoyTemplate: {
        name: "",
        template: "",
        description: "",
        service: "",
        os: ""
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
    let decoyTemplateData = this.state.newDecoyTemplate;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(decoyTemplateData),
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
     newDecoyTemplate: {
        name: "",
        template: "",
        description: "",
        service: "",
        os: ""
      }

    });
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newDecoy: {
          ...prevState.newDecoyTemplate,
          [name]: value
        }
      }),
      () => console.log(this.state.newDecoyTemplate)
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
            value={this.state.newDecoyTemplate.name} handleChange={this.handleInput}
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
              value={this.state.newDecoyTemplate.description} handleChange={this.handleInput}
              placeholder={"Enter a description"} />
         </Form.Item>

          <Form.Item
          name="vlan"
          label="Enter VLAN"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input name={"template"} title={"template"} inputType={"text"}
              value={this.state.newDecoyTemplate.template} handleChange={this.handleInput}
              placeholder={"Enter VLAN"} />
         </Form.Item>

        <Form.Item
          name="service"
          label="Enter service"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input name={"service"} title={"service"} inputType={"text"}
              value={this.state.newDecoyTemplate.service} handleChange={this.handleInput}
              placeholder={"Asset"} />
         </Form.Item>

         <Form.Item
          name="os"
          label="Enter OS"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input name={"os"} title={"os"} inputType={"text"}
              value={this.state.newDecoyTemplate.os} handleChange={this.handleInput}
              placeholder={"Enter VLAN"} />
         </Form.Item>


        <Form.Item {...tailLayout}>
          <Cy_Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Create Decoy Template"}
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

  export default DecoyTemplateForm;
