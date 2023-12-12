import React from "react"

export default function TestimonialNoImage({ type, logo, text, name, company }) {
    
    return (
        <div className={`testimonial ${type}`}>
            <img className="logo" src={logo}/>
            <p className="big-text">{text}</p>
            { type === 'desktop' ? 
                <p className="person-name">
                    {name} <span className="slash">/</span> <span className="gray-text">{company}</span>
                </p> : 
                <div className="person-info">
                    <p>{name}</p>
                    <p className="gray-text">{company}</p>
                </div>
            }
        </div>
    )
}