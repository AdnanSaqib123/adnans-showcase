import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
              Adnan Showcase
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link to="/projects" className="hover:text-gray-300 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header 