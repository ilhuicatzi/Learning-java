import { Link } from "react-router-dom"
import { ModeToggle } from "./ModeToggle"
import { MenuColapse } from "./MenuColapse"

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
        <Link to="/" className="text-3xl font-bold">
        <img src="/spring.svg" alt="logo de spring boot" className="w-10 h-10" />
        </Link>
        <div className="hidden sm:flex items-center gap-3">
            <Link to="/java" className="px-3 py-1.5 hover:bg-muted rounded-md">Java</Link>
            <Link to="/spring-boot" className="px-3 py-1.5 hover:bg-muted rounded-md">Spring Boot</Link>
            <ModeToggle />
        </div>
        <MenuColapse />
    </nav>
  )
}

export default Navbar