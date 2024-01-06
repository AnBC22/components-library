import React from "react"
import check from "./img/check.svg"
import warning from "./img/exclamation.svg"
import error from "./img/circle.svg"
import neutral from "./img/info.svg"

export default function Banner({ status, title, text="" }) {
    
    let icon = ''
    
    switch(status) {
        case 'success': 
            icon = check
            break
        case 'warning': 
            icon = warning
            break
        case 'error':
            icon = error
            break
        case 'neutral':
            icon = neutral
    }
    
    return (
        <div className={`banner ${status}`}>
            <img src={icon}/>
            <div>
                <h3>{title}</h3>
                {text && <p>{text}</p>}
            </div>
        </div>
    )
}