import React from "react";
import ControllableStates from "../search/search";
import BasicTabs from "../tab/tab";
import './main.css'

function Main(){
    return(
        <div>
        <div className="main">Weather App</div>
        <ControllableStates />
        <BasicTabs />
        </div>
    );
}
export default Main