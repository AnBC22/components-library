import React from "react"
import { BsCloudUploadFill } from "react-icons/bs"


export default function CardIcon({ children=<BsCloudUploadFill />, position="top", color="blue" }) {
    
    return (
        <div className={`card-icon ${position} icon-${color}`}>
           {children}
        </div>
    )
}