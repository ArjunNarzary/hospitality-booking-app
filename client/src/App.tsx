import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./containers/Home"
import "./index.css"
import "./App.css"
import Layout from "./components/Layout"
import BookingPage from "./containers/BookingPage"
import BookRoom from "./containers/BookRoom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<BookingPage />} />
          <Route path="/book-room" element={<BookRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
