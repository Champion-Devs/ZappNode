import React from 'react';
import {
    Link
} from "react-router-dom"
function NavBar() {
    return (
        <React.Fragment>
            <div className="flex">
                <div className="flex-1">
                    <Link to="/">
                        ZappNode
                    </Link>
                </div>
                <div className="flex-1">
                    <Link to="/features">
                        Features
                    </Link>
                </div>
                <div className="flex-1">
                    <Link to="/usage">
                        Usage
                    </Link>
                </div>
                <div className="flex-1">
                    <Link to="/pricing">
                        Pricing
                    </Link>
                </div>
                <div className="flex-1">
                    <Link to="/login">
                        Log In
                    </Link>
                </div>
                <div className="flex-1">
                    <Link to="/register">
                        Register
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar