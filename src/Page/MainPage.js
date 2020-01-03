import React, { useState } from "react"
import "../Css/MainPageCss.css"
import MainPageMenuNormal from "../Component/MainPageMenuNormal"
const MainPage = () => {
    return (
        <div className="MainPage">

            <div className="topHeader">
                <MainPageMenuNormal />

            </div>
            <div className="middleBody"></div>
            <div className="bottomFooter"></div>
        </div>
    )
}
export default MainPage;