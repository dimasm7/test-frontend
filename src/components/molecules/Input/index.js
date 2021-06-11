import React from 'react'
import './styles.css'

function Input({title, placeholder}) {
    return (
        <div>
            <label className="label">
                {title}
                <span className="required">* </span>
            </label>
            <input type="text" className="input" placeholder={placeholder}></input>            
        </div>
    )
}
export default Input