import React, { useState, useEffect, useContext } from "react"
import "../Css/MainPageMenuViewCss.css"
import { Icon } from "antd";
import { MainPageContext } from "../Page/MainPage"

const DocNameTag = (props) => {
    // const [docName,]
    return (
        <div className="DocNameTag">ABC.xdw</div>
    );
}
const PageNumberIndicator = (props) => {
    // 初次渲染页码显示

    const pgnum = useContext(MainPageContext).pgNum;


    const [currentPageNumber, setCurrentPageNumber] = useState(pgnum);
    const [totalPageNumber, setTotalPageNumber] = useState(20);


    let tempPageNumber = currentPageNumber;
    const turningSpanToInput = () => {
        let pageNumberIndicator = document.getElementById('pageNumberIndicator');
        let pageNumberInputBox = document.createElement("input");
        pageNumberInputBox.setAttribute("class", "pageNumberInputBox");
        pageNumberInputBox.setAttribute("autofocus", "");
        pageNumberInputBox.setAttribute("maxlength", totalPageNumber.toString().length);
        pageNumberInputBox.setAttribute("value", currentPageNumber);
        // pageNumberInputBox.setAttribute("focus","this.select()");
        pageNumberInputBox.setSelectionRange(0, totalPageNumber.toString().length)

        // 记录变更前页码值
        tempPageNumber = currentPageNumber;
        pageNumberInputBox.addEventListener("change", function () {
            let pageNum = pageNumberInputBox.value;
            if (!isNaN(pageNum)) {
                if (pageNum > 0 && pageNum <= totalPageNumber) {
                    setCurrentPageNumber(pageNum);
                    // T.B.D:跳转页面到对应页
                }
                else if (pageNum > totalPageNumber) {
                    setCurrentPageNumber(totalPageNumber);
                    // T.B.D:跳转页面到最后一页
                }
                else if (pageNum < 0) {
                    setCurrentPageNumber(1);
                    // T.B.D:跳转页面到第一页
                }
                else if (pageNum === "") {
                    setCurrentPageNumber(tempPageNumber);
                }

            }
        })

        pageNumberIndicator.removeChild(pageNumberIndicator.childNodes[0])
        pageNumberIndicator.insertBefore(pageNumberInputBox, pageNumberIndicator.childNodes[0])
    }
    const turningInputToSpan = () => {
        let pageNumberIndicator = document.getElementById('pageNumberIndicator');
        let newCurrentPageNumberSpan = document.createElement("span");
        newCurrentPageNumberSpan.innerText = `${currentPageNumber}`;
        newCurrentPageNumberSpan.addEventListener('click', turningSpanToInput);
        pageNumberIndicator.removeChild(pageNumberIndicator.childNodes[0]);
        pageNumberIndicator.insertBefore(newCurrentPageNumberSpan, pageNumberIndicator.childNodes[0]);
    }
    useEffect(() => {
        setCurrentPageNumber(pgnum);
        console.log("setting Current PageNum" + pgnum);
    }, [pgnum]);
    return (
        <div className="PageNumberIndicator" id="pageNumberIndicator" >
            <span onClick={turningSpanToInput} >{currentPageNumber}</span><span onClick={turningInputToSpan}> / {totalPageNumber}</span>
        </div>
    );
}
const MainPageMenuViewButtonGroup = (props) => {
    const switchMenu = function () {
        props.switchMenu("edit");
        console.log(props.switchMenu)
    }
    return (
        <div className="MainPageMenuViewButtonGroup">

            <button className="buttonRotate"><Icon type="redo" style={{ fontSize: '30px' }} /></button>
            <button className="buttonDownload"><Icon type="download" style={{ fontSize: '30px' }} /></button>
            <button className="buttonEdit" onClick={switchMenu}><Icon type="edit" style={{ fontSize: '30px' }} /></button>

        </div>
    );
}
const MainPageMenuView = (props) => {
    return (
        <div className="MainPageMenuView">
            <DocNameTag />
            <PageNumberIndicator />
            <MainPageMenuViewButtonGroup switchMenu={props.switchMenu} />
        </div>
    );
}

export default MainPageMenuView;