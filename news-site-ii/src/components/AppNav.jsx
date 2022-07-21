
function AppNav(props) {

  const handleNavClick = (clickedItem) => {
    console.log(clickedItem)
  }

  const getNavItems = props.navItems.map((elem) => {
    return (
      <li className="nav-item">
        <a className="nav-link active py-0 px-3" onClick={() => handleNavClick(elem.value)} >{elem.label}</a>
      </li>
    )
  })

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a href="/#/" className="navbar-brand border border-white px-1 rounded">News-Site</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            { getNavItems }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default AppNav;


// navItems = {navItems} 
// handleNavClick = {handleNavClick} 