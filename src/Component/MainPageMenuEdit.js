import React, { useState, useContext } from "react"
import "../Css/MainPageMenuEditCss.css"
import fusenIcon from "../assets/fusen_red_icon.svg"
import { Icon } from "antd";
import { MainPageContext } from "../Page/MainPage"
// var testi = 1;
const Fusen = (props) => {

    const setIsAddingFusen = useContext(MainPageContext).setIsAddingFusen;

    const handleAddFusenStateSet = () => {
        /*
                let offsetX = (window.screen.width - 793) / 2;
                let offsetY = 50;
                let newFusen = document.createElement("div");
                newFusen.style.width = "200px";
                newFusen.style.height = "200px";
                newFusen.style.position = "absolute";
                newFusen.style.left = "323.5px";
                newFusen.style.top = "50px";
                newFusen.style.resize = "both";
                newFusen.style.backgroundColor = "pink";
                newFusen.style.zIndex = "5";
                document.getElementById("canvas2").appendChild(newFusen);*/
        // demo end
        // testi++;
        // if (testi % 2 === 0) {
        //     setIsAddingFusen(true);
        //     console.log("setToTrue," + testi)
        // } else {
        //     setIsAddingFusen(false);
        //     console.log("setToFalse," + testi)
        // }
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