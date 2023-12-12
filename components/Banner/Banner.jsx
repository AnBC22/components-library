import React from "react"

export default function Banner({ status, title, text="" }) {
    
    let icon = ''
    
    switch(status) {
        case 'success': 
            icon = 'check.svg'
            break
        case 'warning': 
            icon = 'exclamation.svg'
            break
        case 'error':
            icon = 'circle.svg'
            break
        case 'neutral':
            icon = 'info.svg'
    }
    
    return (
        <div className={`banner ${status}`}>
            <img src={`components/Banner/img/${icon}`}/>
            <div>
                <h3>{title}</h3>
                {text && <p>{text}</p>}
            </div>
        </div>
    )
}