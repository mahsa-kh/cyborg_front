import React from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const Cy_Input = props => {
  //console.log(props.value);
  return (
    // <div className="form-group">
    //   <label for={props.name} className="form-label">
    //     {props.title}
    //   </label>
    //   <input
    //     className="form-control"
    //     id={props.name}
    //     name={props.name}
    //     type={props.inputType}
    //     value={props.value}
    //     onChange={props.handleChange}
    //     placeholder={props.placeholder}
    //   />
    // </div>

    <div>
      <Input

        style={{

          textAlign: 'center',
          margin: 10
        }}
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder} />
    </div>
  );
};

export default Cy_Input;
