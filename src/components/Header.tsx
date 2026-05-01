import '../assets/styles/default-layout.css';

const Header: React.FC = () => {

  return (
    <nav className="page-header">
      <a className="page-brand" href="/">
        Batylink
      </a>
      <ul>
        <li><a href="/about" className="nav-link">About</a></li>
        <li><a href="/contact" className="nav-link">Contact</a></li>
        <li><a href="/login" className="nav-link">Login</a></li>
      </ul>
    </nav>
  )
}

export default Header
