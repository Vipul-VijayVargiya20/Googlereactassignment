import React from 'react'
import '../StyleSheets/NavBar.css'


const NavBar = () => {
    return (
        <div className="header">

            <div className="header__right">
                <a href="H">Gmail</a>
                <a href="H">Images</a>
                <span className="material-icons header__apps"> apps </span>
                <span className="material-icons"> account_circle </span>
            </div>

        </div>
    )
}

export default NavBar