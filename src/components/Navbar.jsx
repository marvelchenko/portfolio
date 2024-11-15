import { FaGithub, FaLinkedin,} from "react-icons/fa"
import logo from "../assets/logo.png"
import { FaFacebook, FaX } from "react-icons/fa6"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} className="mx-2" width={50} height={33} alt="" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://github.com/marvelchenko"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="LinkedIn">
                <FaLinkedin/>
             </a>
             <a href="https://www.linkedin.com/in/your-linkedin-profile"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="LinkedIn">
                <FaGithub/>
             </a>
             <a href="https://www.linkedin.com/in/your-linkedin-profile"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="LinkedIn">
                <FaFacebook/>
             </a>
             <a href="https://www.linkedin.com/in/your-linkedin-profile"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="LinkedIn">
                <FaX/>
             </a>
        </div>
    </nav>
  )
}

export default Navbar