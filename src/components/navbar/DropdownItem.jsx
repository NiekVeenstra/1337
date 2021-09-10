import React from 'react'

const DropdownItem = (props) => {
    return (
        <a href="#" className="menu-item">

            {props.children}

        </a>
    )
}

export default DropdownItem
