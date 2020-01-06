import React, { useState, useEffect, createContext } from "react"
import "../Css/MainPageCss.css"
import MainPageMenu from "../Component/MainPageMenu"
import DocWindow from "../Component/DocWindow"



const MainPage = () => {
    // 页码更新
    // T.B.D :获取总页面高度
    const [totalPageHeight, setTotalPageHeight] = useState((1222 + 100) * 6);
    const [pageNumber, setPageNumber] = useState(Math.round(document.documentElement.scrollTop / totalPageHeight * 6 + 1));
    const handleScroll = () => {
        setPageNumber(Math.round(document.documentElement.scrollTop / totalPageHeight * 6 + 1));
        console.log(pageNumber);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    // 文档状态 (:正在添加便笺/...)
    // 等待点击文档放下便笺
    const [isAddingFusen, setIsAddingFusen] = useState(false);

    useEffect(() => {

        if (isAddingFusen === true) {

            // console.log('isAddingFusen change:' + isAddingFusen);

        } else {

        }
    }, [isAddingFusen]);

    return (
        <MainPageContext.Provider value={{ pgNum: pageNumber, setIsAddingFusen: setIsAddingFusen, isAddingFusen: isAddingFusen }}>
            <div className="MainPage">
                <div className="topHeader">

                    <MainPageMenu />

                </div>
                <div className="middleBody">
                    <DocWindow />
                </div>
                <div className="bottomFooter"></div>
            </div >
        </MainPageContext.Provider>
    )
}
export default MainPage;

// 页码传递子组件
export const MainPageContext = React.createContext();
