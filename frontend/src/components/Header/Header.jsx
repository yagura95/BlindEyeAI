import "./Header.css"

const Header = () => {
  return <div className="header-container">
      <a href="/" className="header-logo">
        <img id="header-logo" src="/blind-eye-ai-logo.svg" /> 
      </a>  

      <a href="/training" className="header-item">
        <div>Training</div>
      </a>  
      <a href="/testing" className="header-item">
        <div>Testing</div>
      </a>  
      <a href="/docs" className="header-item">
        <div>Docs</div>
      </a>  
    </div>
}

export default Header
