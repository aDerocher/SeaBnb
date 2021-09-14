
import './NavigationTwo.css'

const NavigationTwo = () => {
  return (
    <nav className='nav-container2'>
      <div className="nav-logo2">
      </div>

      <div className="search-bar2">
        <p className="s-2 searchbar-input-box2">Start your search</p>
        <div className="search-i-btn-icon2"></div>  
      </div>

      <div className='nav-profile-container'>
        <div className='nav-l nav-l-h wText'><p>Become a host</p></div>
        <div className='nav-l nav-l-h wText'><p className='nav-bold'>⛒</p></div>
        <div className='nav-l nav-r wText'>
          <div><p className='nav-bold'>☰</p></div>
          <div className='nav-user-img'></div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationTwo