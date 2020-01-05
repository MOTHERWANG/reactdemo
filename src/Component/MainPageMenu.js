import React, { useState } from "react"
import MainPageMenuView from "./MainPageMenuView"
import MainPageMenuEdit from "./MainPageMenuEdit"


const MainPageMenu = (props) => {
    const [menuState,setMenuState] = useState("view");
    var switchMenu = (toState) => {
        setMenuState(toState);
    }
    return (
        <div>
            {menuState === "view" ? <MainPageMenuView switchMenu={switchMenu}/> : <MainPageMenuEdit switchMenu={switchMenu}/>}
        </div>
    );
}
export default MainPageMenu