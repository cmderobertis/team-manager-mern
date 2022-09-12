import React from "react"
import { Routes, Route, NavLink, Navigate, Outlet } from "react-router-dom"

function App() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8 col-sm-10 text-center">
        <h1>Team Manager</h1>
        <div className="row">
          <div className="col">
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-primary active" : "btn btn-light"
              }
              to={"/players"}
            >
              Manage Players
            </NavLink>
          </div>
          <div className="col">
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-light"
              }
              to={"/status"}
            >
              Manage Player Status
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/players/list" />}></Route>
        </Routes>
        <Outlet />
      </div>
    </div>
  )
}

export default App
