import React, { useState } from "react"
import "../Css/MainPageMenuViewCss.css"

const DocNameTag = (props) => {
    // const [docName,]
    return (
        <div className="DocNameTag">bbb.xdw</div>
    );
}
const PageNumberIndicator = (props) => {
    // 初次渲染页码显示
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [totalPageNumber, setTotalPageNumber] = useState(20);
    const turningSpanToInput = () => {
        let pageNumberIndicator = document.getElementById('pageNumberIndicator');
        let pageNumberInputBox = document.createElement("input");
        pageNumberInputBox.setAttribute("class", "pageNumberInputBox");
        pageNumberInputBox.setAttribute("autofocus", "");
        // pageNumberInputBox.setAttribute("maxlength", totalPageNumber.toString().length);
        pageNumberInputBox.setAttribute("value", currentPageNumber);
        pageNumberInputBox.setSelectionRange(0, totalPageNumber.toString().length)
        pageNumberIndicator.removeChild(pageNumberIndicator.childNodes[0])
        pageNumberIndicator.insertBefore(pageNumberInputBox, pageNumberIndicator.childNodes[0])

        // console.log(pageNumberIndicator.firstChild)
        pageNumberInputBox.addEventListener("input", function () {
            let pageNum = pageNumberInputBox.value;
            // 校验输入是否为数字
            if (pageNum !== " " && !isNaN(Number(pageNum))) {
                //校验输入是否为范围内

            } else {
                pageNumberInputBox.value = currentPageNumber;
                // console.log('非数字')
                turningInputToSpan();
                // let newCurrentPageNumberSpan = document.createElement("span");

                // newCurrentPageNumberSpan.innerText = `${currentPageNumber}`;

                // pageNumberIndicator.removeChild(pageNumberIndicator.childNodes[0]);
                // pageNumberIndicator.insertBefore(newCurrentPageNumberSpan, pageNumberIndicator.childNodes[0])
            }
            console.log(pageNum);
        });
    }
    const turningInputToSpan = () => {
        let pageNumberIndicator = document.getElementById('pageNumberIndicator');
        let newCurrentPageNumberSpan = document.createElement("span");
        newCurrentPageNumberSpan.innerText = `${currentPageNumber}`;

        pageNumberIndicator.removeChild(pageNumberIndicator.childNodes[0]);
        pageNumberIndicator.insertBefore(newCurrentPageNumberSpan, pageNumberIndicator.childNodes[0])
    }
    const pageTurningInputHandler = () => {
        // console.log(document.getElementById("pageNumberIndicator").childNodes[0].tagName);
        
        if(document.getElementById("pageNumberIndicator").childNodes[0].tagName==="SPAN"){
            turningSpanToInput();
        }else{
            turningInputToSpan();
        }
        
        
    }
    return (
        <div className="PageNumberIndicator" id="pageNumberIndicator" onClick={pageTurningInputHandler}>
            <span id="" >{currentPageNumber}</span><span> / {totalPageNumber}</span>
        </div>
    );
}
const MainPageMenuButtonGroup = (props) => {
    return (
        <div>aaaaaaaaaaaaaaaaaaaa</div>
    );
}
const MainPageMenuView = (props) => {
    return (
        <div className="MainPageMenuView">
            <DocNameTag />
            <PageNumberIndicator />
            <MainPageMenuButtonGroup />
        </div>
    );
}

export default MainPageMenuView;