import React, { useState, useEffect, createContext } from "react"
import "../Css/MainPageCss.css"
import MainPageMenu from "../Component/MainPageMenu"
import DocWindow from "../Component/DocWindow"


const MainPage = () => {
    // const [pageNumber,setPageNumber] = useState(1);
    // T.B.D :获取总页面高度
    const [totalPageHeight, setTotalPageHeight] = useState((1222 + 100) * 6);
    const [pageNumber, setPageNumber] = useState(Math.round(document.documentElement.scrollTop / totalPageHeight * 6 + 1));
    // 当前页码

    const handleScroll = () => {
        setPageNumber(Math.round(document.documentElement.scrollTop / totalPageHeight * 6 + 1));
        // 将更新的页码值传递给子组件PageNumberIndicator
        console.log(pageNumber);

    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    // const PageNumContext = createContext({
    //     pageNumber
    // })

    return (

        <div className="MainPage">

            <div className="topHeader">
                <MyContext.Provider value={pageNumber}>
                    <MainPageMenu />
                </MyContext.Provider>
            </div>
            <div className="middleBody">
                <DocWindow />
            </div>
            <div className="bottomFooter"></div>
        </div>

    )
}
export default MainPage;
export const MyContext = React.createContext('ao');
// export MyContext;