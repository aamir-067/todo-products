import React from 'react'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="w-full px-6 h-20 flex justify-end items-center">

            <div className="flex justify-between w-5/12 lg:w-1/12 md:w-3/12 gap-10 mr-20 items-center">
                <NavLink
                    to={""}
                    className={({ isActive }) =>
                        `${isActive ? "text-lg font-bold" : "text-md font-normal"
                        }`
                    }
                >
                    Todos
                </NavLink>
                <NavLink
                    to={"/products"}
                    className={({ isActive }) =>
                        `${isActive ? "text-lg font-bold" : "text-md font-normal"
                        }`
                    }
                >
                    Products
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar