import React from 'react'
import './styles.css'

function CheckBox({label}) {
    return (
        <div>
            <label className="label">
                <input className="checkbox" type="checkbox"></input>
                {label}
            </label>
        </div>
    )
}

export default CheckBox
