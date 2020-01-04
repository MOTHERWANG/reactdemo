import React, { useState } from "react"
import "../Css/MainPageCss.css"
import MainPageMenuView from "../Component/MainPageMenuView"
const MainPage = () => {
    return (
        <div className="MainPage">

            <div className="topHeader">
                <MainPageMenuView />

            </div>
            <div className="middleBody"></div>
            <div className="bottomFooter"></div>
        </div>
    )
}
export default MainPage;