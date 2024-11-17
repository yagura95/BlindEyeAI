import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return <nav className="header-container">
      <Link to={"/"} className="header-logo">
        <img id="header-logo" src="/blind-eye-ai-logo.svg" /> 
      </Link>  
      <Link to={"/training"} className="header-item">
        <div>Training</div>
      </Link>  
      <Link to={"/testing"} className="header-item">
        <div>Testing</div>
      </Link>  
      <Link to={"/docs"} className="header-item">
        <div>Docs</div>
      </Link>  
    </nav>
}

export default Header
