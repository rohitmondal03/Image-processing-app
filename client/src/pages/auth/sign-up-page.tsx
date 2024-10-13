import { FormEvent, useState } from "react"
import { Link, useNavigate, Form } from "react-router-dom"
import { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react"

import { signUpUser } from "@/utils/functions/auth/sign-up"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function SignUpPage() {
  const { toast } = useToast();
  const navigate= useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // handle sign up
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const status = await signUpUser(user)

    if(status == 403) {
      toast({
        title: "User already exists",
        description: "This E-Mail already exits !!"
      })
      return;
    }

    toast({
      title: "Signed in successfully"
    })
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="text-center">
          <LockIcon className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            Sign Up to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Or{" "}
            <Link
              to="/auth/login"
              className="font-medium text-primary hover:text-primary/90 underline underline-offset-2"
            >
              login with existing account
            </Link>
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Label htmlFor="email-address" className="sr-only">
                Email address
              </Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Email address"
                autoComplete="off"
                value={user.email}
                onChange={e => setUser(prev => ({
                  ...prev,
                  email: e.target.value,
                }))}
              />
            </div>
            <div>
              <Label htmlFor="name" className="sr-only">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="name"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Your Name"
                autoComplete="off"
                value={user.name}
                onChange={e => setUser(prev => ({
                  ...prev,
                  name: e.target.value,
                }))}
              />
            </div>
            <div className="relative">
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
                value={user.password}
                onChange={e => setUser(prev => ({
                  ...prev,
                  password: e.target.value,
                }))}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          <div>
            {/* <MemoLoadingButton isLoading={isLoading} className="w-full">
              Sign Up
            </MemoLoadingButton> */}
            <Button type="submit" className="w-full">Sign Up</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage