import React from "react"

export default function CardContent({ children, title }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    )
}