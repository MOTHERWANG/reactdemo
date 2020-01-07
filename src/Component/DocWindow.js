import React, { useState, useEffect, useContext } from "react"
import testImg from "../assets/pic/GetPageImage.png"
import "../Css/DocWindowCss.css"
import { MainPageContext } from "../Page/MainPage"

//demo id
var id = 1;

const DocPage = (props) => {
    /*
        文档属性。。。
    */
    const [pageNumber, setPageNumber] = useState(props.pageNumber);
    const [imgSrc, setImgSrc] = useState(props.imgSrc);
    const [imgWidth, setImgWidth] = useState(props.imgWidth);
    const [imgHeight, setImgGeight] = useState(props.imageHeight);
    // DocPage大小和docPageEditBase一样
    const [docPageEditBaseWidth, setDocPageEditBaseWidth] = useState(window.screen.width);
    const [docPageEditBaseHeight, setDocPageEditBaseHeight] = useState(props.imgHeight + 100);
    const [rotateAngle, setRotateAngle] = useState(props.rotateAngle);

    // DocPage大小的样式定义
    const pageSizeCss = {
        width: docPageEditBaseWidth,
        height: docPageEditBaseHeight
    }
    // image偏移于DocPage样式定义 T.B.D...
    const imagePositionCss = {
        left: (window.screen.width - imgWidth) / 2,
        top: 50
    }
    const docPageEditBasePositionCss = {
        width: docPageEditBaseWidth,
        height: docPageEditBaseHeight
    }
    // 此时零点坐标(相对于DocPage)：x:(window.screen.width-imgWidth)/2,y:50




    // // 为每一页添加监听鼠标移动/按下事件
    // useEffect(() => {
    //     document.getElementById("docPageEditBase" + pageNumber).addEventListener("mousedown", pageOnMouseDownHandler);
    //     document.getElementById("docPageEditBase" + pageNumber).addEventListener("mousemove", pageOnMouseMoveHandler);
    //     return (() => {
    //         document.getElementById("docPageEditBase" + pageNumber).removeEventListener("mousedown", pageOnMouseDownHandler);
    //         document.getElementById("docPageEditBase" + pageNumber).removeEventListener("mousedown", pageOnMouseMoveHandler);
    //     })
    // });

    return (
        <div className="DocPage" style={pageSizeCss}>
            <img className="docPageImage" src={imgSrc} style={imagePositionCss} />
            <div id={"docPageEditBase" + pageNumber} className="docPageEditBase" style={docPageEditBasePositionCss}> </div>
        </div>
    );
}



const DocWindow = (props) => {





    /*
        便笺添加
    */
    // 添加便笺的状态（从MainPage订阅的）isAddingFusen:true/false
    const isAddingFusen = useContext(MainPageContext).isAddingFusen;
    const setIsAddingFusen = useContext(MainPageContext).setIsAddingFusen;


    useEffect(() => {
        console.log('DOCWIN isADDing:' + isAddingFusen);
        if (isAddingFusen === true) {
            handleAddFusen(1);

        }
    }, [isAddingFusen]);
    const handleAddFusen = function (page) {
        id++;
        /*执行添加便笺*/
        // create一个便笺div,绑定事件跟随光标运动   style{width,height,...}
        let newFusenDiv = document.createElement("div");
        newFusenDiv.style.width = "350px";
        newFusenDiv.style.height = "100px";
        newFusenDiv.style.opacity = "0.75";
        newFusenDiv.style.backgroundColor = "pink";
        newFusenDiv.id = "f" + id;// T.B.D
        newFusenDiv.innerHTML = "ここに文字列を入力してください。";
        console.log('id' + id);
        newFusenDiv.style.position = "absolute";
        newFusenDiv.style.zIndex = "6"; // T.B.D
        newFusenDiv.style.left = (window.screen.width - 793) / 2 + "px";
        newFusenDiv.style.top = "50px"


        document.onmousemove = function (e) {
            // console.log(e)
            // console.log(e.target)
            document.getElementById("topHoldmer").appendChild(newFusenDiv);
            newFusenDiv.style.left = e.pageX + 0 + "px";
            newFusenDiv.style.top = e.pageY + "px";

        }

        // 监听鼠标click  检查坐标，符合就解除便笺div移动事件
        document.onmousedown = function (e) {
            // console.log("down e:" + e.path[0].id);

            // 获取e 的divId
            // let page = 

            // 取消鼠标移动事件
            document.onmousemove = null;
            // 透明度更改
            document.getElementById("f" + id).style.opacity = "1";
            // 将新便笺插入对应页的docPageEditBase div
            document.getElementById("topHoldmer").appendChild(newFusenDiv);
            setIsAddingFusen(false);
        }

    }
    return (
        <div className="DocWindow">
            <div className="topHoldmer" id="topHoldmer"></div>
            <DocPage imgSrc={testImg} imgWidth={793} imgHeight={1122} pageNumber={1} />
            <DocPage imgSrc={testImg} imgWidth={793} imgHeight={1122} pageNumber={2} />
            <DocPage imgSrc={testImg} imgWidth={793} imgHeight={1122} pageNumber={3} />
            <DocPage imgSrc={testImg} imgWidth={793} imgHeight={1122} pageNumber={4} />
            <DocPage imgSrc={testImg} imgWidth={793} imgHeight={1122} pageNumber={5} />
            <DocPage imgSrc={testImg} imgWidth={793} imgHeight={1122} pageNumber={6} />
            <DocPage imgSrc={testImg} imgWidth={793} imgHeight={1122} pageNumber={7} />

            <div className="topHoldmer"></div>
        </div>
    );
}

export default DocWindow;