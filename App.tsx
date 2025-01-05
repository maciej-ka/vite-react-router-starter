import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"

const App = () => (
  <div>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </div>
)
export default App
