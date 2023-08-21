import React from "react"

export const Button = ({btnName, handleClick}) => {
    return(
        <button className = {btnName === "TRUE" ? "true-btn" : "false-btn"} type="button" onClick={() => handleClick(btnName)}>{btnName}</button>
    )
}