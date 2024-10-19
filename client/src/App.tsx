import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { DASHBOARD_PATH, HOME_PATH, LOGIN_PATH, SIGNUP_PATH } from './utils/config/route.ts'
import { signUpUserAction, logInUserAction } from "./utils/actions/auth.action.ts"
import HomePage from './pages/home-page.tsx'
import SignUpPage from './pages/auth/sign-up-page.tsx'
import LoginPage from './pages/auth/login-page.tsx'
import DashboardPage from './pages/protected/dashboard.tsx'
import { RootProvider } from "@/components/providers/root-provider.tsx"

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <HomePage />,
  },
  {
    path: DASHBOARD_PATH,
    element: <DashboardPage />
  },
  {
    path: SIGNUP_PATH,
    element: <SignUpPage />,
    action: signUpUserAction,
  },
  {
    path: LOGIN_PATH,
    element: <LoginPage />,
    action: logInUserAction,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App