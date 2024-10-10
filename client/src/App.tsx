import { Route, BrowserRouter, Routes } from "react-router-dom"

import HomePage from "./pages/home-page"
import SignUpPage from "./pages/auth/sign-up-page"
import LoginPage from "./pages/auth/login-page"
import Header from "./components/global/header"
import Footer from "./components/global/footer"

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App