import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./containers/Home"
import "./index.css"
import "./App.css"
import Layout from "./components/Layout"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
