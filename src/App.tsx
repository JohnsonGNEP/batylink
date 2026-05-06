import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import LoginPage from "./pages/login";
import CategoriesPage from './pages/categories';
import DefaultLayout from './layouts/DefaultLayout';
import AuthLayout from './layouts/AuthLayout';
import PageNotFound from './pages/page-not-found';


const App: React.FC = () => {

  return (
    <Routes>
      {/* Default Layouts */}
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Route>

      {/* Auth Layouts */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Error Pages */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
