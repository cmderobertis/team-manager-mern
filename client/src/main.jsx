import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import App from "./App"
import Players from "./views/Players"
import Manager from "./views/Manager"
import Create from "./views/Create"
import Update from "./views/Update"
import Status from "./views/Status"
import StatusList from "./components/StatusList"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />}>
        <Route path="players" element={<Players />}>
          <Route index element={<Navigate to="list" />} />
          <Route path="list" element={<Manager />} />
          <Route path="new" element={<Create />} />
          <Route path="edit/:id" element={<Update />} />
        </Route>
        <Route path="status" element={<Status />}>
          <Route index element={<Navigate to="1" />} />
          <Route path="1" element={<StatusList num="1" />} />
          <Route path="2" element={<StatusList num="2" />} />
          <Route path="3" element={<StatusList num="3" />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
