import React from "react";
import { Select } from 'antd';

const { Option } = Select;

const Cy_Select = props => {
  return(
    <div >
            <label htmlFor={props.name}> {props.title} </label>



    <Select   style={{ width: 450 }}
              name={props.name}
              value = {props.value}
              title = {props.title}
              onChange={props.handleChange}>
        {props.options.map(option => {
            return(
              <Option key={option}
                      value={option}
                      name={option}>
                      {option}
                      </Option>
              );
               })}
      </Select>
    </div>
    );
};

export default Cy_Select;



     // <select className="form-control"
      //         name={props.name}
      //         value = {props.value}
      //         title = {props.title}
      //         onChange={props.handleChange}>

      //     <option value="" disabled>{props.placeholder}</option>
      //     {props.options.map(option => {
      //       return(
      //         <option key={option}
      //                 value={option}
      //                 name={option}>
      //                 {option}</option>
      //         );
      //     })}
      // </select>
