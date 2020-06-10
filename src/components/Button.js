import React from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const Cy_Button = props => {
  console.log(props.style);
  return (
    // <button
    //   style={props.style}
    //   className={
    //     props.type == "primary" ? "btn btn-primary" : "btn btn-secondary"
    //   }
    //   onClick={props.action}
    // >
    //   {props.title}
    // </button>


    <>
    <Button type={props.type} onClick={props.action} style={props.style}>{props.title}</Button>
  </>



  );
};




export default Cy_Button;


