import React from "react";
import {Route, Link} from "react-router-dom";
import {withRouter} from "react-router";

const NotFound = (props) => {

    return (
        <div>
        <h1>잘못된 주소입니다</h1>
        <button onClick={()=> {
            props.history.goBack(); 
          }}>뒤로가기</button>
          </div>
    );
};

export default NotFound; 