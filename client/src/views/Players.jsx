import React from "react"
import { Routes, Route, NavLink, Outlet } from "react-router-dom"

const Players = () => {
  return (
    <div>
      <div className="row mt-3">
        <div className="col">
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-primary active" : "btn btn-light"
            }
            to={"/players/list"}
          >
            View Players
          </NavLink>
        </div>
        <div className="col">
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-primary" : "btn btn-light"
            }
            to={"/players/new"}
          >
            Add a player
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Players
