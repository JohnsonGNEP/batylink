import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProfilePage, { ProfileEditPage } from "./pages/profile";
import CategoriesPage from './pages/categories';
import DefaultLayout from './layouts/DefaultLayout';
import AuthLayout from './layouts/AuthLayout';
import ServiceRequestPage from './pages/service-request';
import PageNotFound from './pages/page-not-found';


const App: React.FC = () => {

  return (
    <Routes>
      {/* Default Layouts */}
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<CategoriesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<ProfileEditPage />} />
        <Route path="/service-request" element={<ServiceRequestPage />} />
      </Route>

      {/* Auth Layouts */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Error Pages */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App

