import React from "react"

export default function Badge({ text, color, shape='', ...rest}) {
    return (
        <div className={`badge ${color} ${shape}`}>{text}</div>
    )
}