import React from "react"

export default function Button({ children, className, size, variant, ...rest }) {
    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`

    return (
        <button className={`${sizeClass} ${variantClass} ${className}`} {...rest}>
            {children}
        </button>
    )
}