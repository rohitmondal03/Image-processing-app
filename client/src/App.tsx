import { Route, BrowserRouter, Routes } from "react-router-dom"

import { Toaster } from "@/components/ui/toaster"
import Header from "./components/global/header"
import Footer from "./components/global/footer"
import HomePage from "./pages/home-page"
import SignUpPage from "./pages/auth/sign-up-page"
import LoginPage from "./pages/auth/login-page"
import Dashboard from "./pages/protected/dashboard"

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  )
}

export default App