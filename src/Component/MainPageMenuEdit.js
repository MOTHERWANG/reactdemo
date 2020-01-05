import React, { useState } from "react"
import "../Css/MainPageMenuEditCss.css"
import fusenIcon from "../assets/fusen_red_icon.svg"
import {Icon} from "antd";

const Fusen = (props) => {

    return (

        <button className="Fusen">
            <img src={fusenIcon}  />
        </button>
    );
}
const FusenList = (props) => {
    return (
        <div className="FusenList">
            <Fusen />
        </div>
    );
}
const MainPageMenuEditButtonGroup = (props) => {
    const switchMenu=function(){
        props.switchMenu("view");
    }
    return (
        <div className="MainPageMenuEditButtonGroup">
            <button className="buttonFinish" onClick={switchMenu}><Icon type="check" style={{ fontSize: '30px'}}/></button>
        </div>
    )
}
const MainPageMenuEdit = (props) => {
    return (
        <div className="MainPageMenuEdit">
            <FusenList />
            <MainPageMenuEditButtonGroup switchMenu={props.switchMenu}/>
            
        </div>
    );
}

export default MainPageMenuEdit;