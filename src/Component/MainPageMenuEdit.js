import React, { useState, useContext } from "react"
import "../Css/MainPageMenuEditCss.css"
import fusenIcon from "../assets/fusen_red_icon.svg"
import { Icon } from "antd";
import { MainPageContext } from "../Page/MainPage"
// var testi = 1;
const Fusen = (props) => {

    const setIsAddingFusen = useContext(MainPageContext).setIsAddingFusen;

    const handleAddFusenStateSet = () => {
        // /*执行添加便笺*/
        // // create一个便笺div,绑定事件跟随光标运动   style{width,height,...}
        // let newFusenDiv = document.createElement("div");
        // newFusenDiv.style.width = "350px";
        // newFusenDiv.style.height = "100px";
        // newFusenDiv.style.opacity = "0.75";
        // newFusenDiv.style.backgroundColor = "pink";
        // newFusenDiv.id = "f";// T.B.D
        // newFusenDiv.innerHTML = "ここに文字列を入力してください。";

        // newFusenDiv.style.position = "absolute";
        // newFusenDiv.style.zIndex = "6"; // T.B.D
        // newFusenDiv.style.left = (window.screen.width - 793) / 2 + "px";
        // newFusenDiv.style.top = "50px";
        // // newFusenDiv.style.display = false;
        // document.getElementById("topHoldmer").appendChild(newFusenDiv);

        setIsAddingFusen(true);
    }
    return (

        <button className="Fusen" onClick={handleAddFusenStateSet}>
            <img src={fusenIcon} />
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
    const switchMenu = function () {
        props.switchMenu("view");
    }
    return (
        <div className="MainPageMenuEditButtonGroup">
            <button className="buttonFinish" onClick={switchMenu}><Icon type="check" style={{ fontSize: '30px' }} /></button>
        </div>
    )
}
const MainPageMenuEdit = (props) => {
    return (
        <div className="MainPageMenuEdit">
            <FusenList />
            <MainPageMenuEditButtonGroup switchMenu={props.switchMenu} />

        </div>
    );
}

export default MainPageMenuEdit;