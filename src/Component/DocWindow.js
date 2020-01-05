import React, { useState ,useEffect} from "react"
import testImg from "../assets/pic/GetPageImage.png"
import "../Css/DocWindowCss.css"

const DocPage = (props) => {
    const [pageNumber, setPageNumber] = useState(props.pageNumber);
    const [imgSrc, setImgSrc] = useState(props.imgSrc);
    const [imgWidth, setImgWidth] = useState(props.imgWidth);
    const [imgHeight, setImgGeight] = useState(props.imageHeight);
    // DocPage大小和Canvas一样
    const [canvasWidth, setCanvasWidth] = useState(window.screen.width);
    const [canvasHeight, setCanvasHeight] = useState(props.imgHeight + 100);
    const [rotateAngle, setRotateAngle] = useState(props.rotateAngle);

    // DocPage大小的样式定义
    const pageSizeCss = {
        width: canvasWidth,
        height: canvasHeight
    }
    // image偏移于Canvas/DocPage样式定义
    const imagePositionCss = {
        left:(window.screen.width-imgWidth)/2,
        top:50
    }

    // 此时零点坐标(相对于DocPage)：x:(window.screen.width-imgWidth)/2,y:50


    const addAnnotation = function () {
        alert('add anno');
    }
    return (
        <div className="DocPage" style={pageSizeCss}>
            <img className="docPageImage" src={imgSrc} style={imagePositionCss}/>
            <canvas className="docPageCanvas" width={canvasWidth} height={canvasHeight}> </canvas>
        </div>
    );
}
const DocWindow = (props) => {
    
    return (
        <div className="DocWindow">
            <div className="topHoldmer"></div>
            <DocPage imgSrc={testImg} imgWidth={793} imgHeight={1122} />
            <DocPage imgSrc={testImg} imgWidth={793} imgHeight={1122} />
            <DocPage imgSrc={testImg} imgWidth={793} imgHeight={1122} />
            <DocPage imgSrc={testImg} imgWidth={793} imgHeight={1122} />
            <DocPage imgSrc={testImg} imgWidth={793} imgHeight={1122} />
            <DocPage imgSrc={testImg} imgWidth={793} imgHeight={1122} />


            <div className="topHoldmer"></div>
        </div>
    );
}

export default DocWindow;