import React from "react";
import Quiz from "./Quiz";
import Header from "./Header";
import './App.css';


export default function App() {

    const[darkTheme, setDarkTheme] = React.useState(false)
    function toggleDarkTheme() {
        setDarkTheme(!darkTheme)
        console.log(darkTheme)
    }
    return (
        <div className={(darkTheme ? "dark " : "") + "main--container"}>
            <Header theme = {darkTheme} toggleDarkTheme = {toggleDarkTheme}/>
            <Quiz theme = {darkTheme}/>
        </div>

    )
}