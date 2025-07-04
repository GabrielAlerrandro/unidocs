import { BrowserRouter, Route, Routes } from "react-router"
import { Login } from "./pages/login"
import { NotFound } from "./pages/not-found"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
