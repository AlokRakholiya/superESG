import React  from "react";
import Herobanner from "./herobanner";
import Featured from "./featured";
import Suspendisse from "./suspendisse";
import Suspendissebanner from "./suspendissebanner";
import Suspendissecards from "./suspendissecards";
import Strategy from "./strategy";
export default function Home(){
    return(
        <div>
            <Herobanner/>
            <Featured/>
            <Strategy/>
            <Suspendisse/>
            <Suspendissebanner/>
            <Suspendissecards/>
        </div>
    )
}