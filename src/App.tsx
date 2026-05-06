import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProfilePage, { ProfileEditPage } from "./pages/profile";


const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/edit" element={<ProfileEditPage />} />
      <Route path="*" element={<div><h1>Page no found</h1></div>} />
    </Routes>
  )
}

export default App

