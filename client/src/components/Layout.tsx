import { Link, Outlet, useLocation } from "react-router"

const Layout = () => {
  const location = useLocation()
  return (
    <div className="p-2">
      <header className="py-2">
        <h1 className="font-black text-3xl py-4">Hospitality Booking App</h1>
      </header>
      <nav className="py-2">
        <ul className="bg-gray-100 w-fit p-1 rounded-md list-none flex items-center gap-2 text-gray-400">
          <li
            className={`py-0.3 px-3 rounded-md hover:text-black ${
              location.pathname === "/" &&
              "bg-white border border-gray-100 shadow text-black"
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`py-0.3 px-3 rounded-md hover:text-black ${
              location.pathname.startsWith("/bookings") &&
              "bg-white border border-gray-100 shadow text-black"
            }`}
          >
            <Link to="/bookings">Bookings</Link>
          </li>
          <li
            className={`py-0.3 px-3 rounded-md hover:text-black ${
              location.pathname.startsWith("/book-room") &&
              "bg-white border border-gray-100 shadow text-black"
            }`}
          >
            <Link to="/book-room">Book Room</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
