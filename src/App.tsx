import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import LoginPage from "./pages/login";


const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<div><h1>Page no found</h1></div>} />
    </Routes>
  )
}

export default App
