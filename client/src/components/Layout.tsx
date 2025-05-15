import React from "react"
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <div>
      <header className="py-2">
        <h1 className="font-semibold text-2xl">Hospitality Booking App</h1>
      </header>
      <Outlet />
    </div>
  )
}

export default Layout
