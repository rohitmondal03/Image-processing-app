import { Link } from 'react-router-dom'
import { ImageIcon } from 'lucide-react'

import { LOGIN_PATH } from '@/utils/config/route'

function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        to={"/"}
        className="flex items-center justify-center"
      >
        <ImageIcon className="h-6 w-6 mr-2" />
        <span className="font-bold">
          ImagePro
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          to="#"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Features
        </Link>
        <Link
          to="#"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Pricing
        </Link>
        <Link
          to="#"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          About
        </Link>
        <Link
          to={LOGIN_PATH}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Login
        </Link>
      </nav>
    </header>
  )
}

export default Header