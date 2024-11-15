import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaX } from "react-icons/fa6";

const Footer = ({ onHomeClick, onAboutClick, onTechnologiesClick, onProjectsClick, onContactClick }) => {
  return (
    <div>
      <footer className="bg-dark-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Media</h3>
              <div className="space-x-4 flex">
                <a
                  className="hover:text-yellow-400"
                  href="https://www.linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="hover:text-yellow-400"
                  href="https://www.linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  className="hover:text-yellow-400"
                  href="https://www.linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  className="hover:text-yellow-400"
                  href="https://www.linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <FaX />
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <button onClick={onHomeClick} className="hover:text-yellow-400">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={onAboutClick} className="hover:text-yellow-400">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={onTechnologiesClick} className="hover:text-yellow-400">
                    Technologies
                  </button>
                </li>
                <li>
                  <button onClick={onProjectsClick} className="hover:text-yellow-400">
                    Projects
                  </button>
                </li>
                <li>
                  <button onClick={onContactClick} className="hover:text-yellow-400">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm">Email: egormarvelous@gmail.com</p>
              <p className="text-sm">Phone: +234 70 6215 1904</p>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
