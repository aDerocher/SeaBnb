import './Footer.css';

const Footer = () => {

  return (
  <div className="footer-container main-container">
    <div className='footer-top'>
      <div className='footer-top-section'>
        <h2 className="foot-title">ABOUT</h2>
        <ul>
          <li><a href="https://github.com/aDerocher" className="github-link">Creators Github ⚓</a></li>
          <li className='dead-link'>How Seabnb works</li>
          <li className='dead-link'>Newsroom</li>
          <li className='dead-link'>Seabnb 2021</li>
          <li className='dead-link'>Investors</li>
          <li className='dead-link'>Seabnb Plus</li>
          <li className='dead-link'>Careers</li>
          <li className='dead-link'>Seabnb for "Work"</li>
          <li className='dead-link'>Founder's Letter</li>
        </ul>
      </div>
      <div className='footer-top-section'>
        <h2 className="foot-title">COMMUNITY</h2>
        <ul>
          <li className='dead-link'>Accessibility</li>
          <li className='dead-link'>Diversity</li>
          <li className='dead-link'>Seabnb Associates</li>
          <li className='dead-link'>Guest Referrals</li>
          <li className='dead-link'>Gift Cards</li>
          <li className='dead-link'>Seabnb.org</li>
        </ul>
      </div>
      <div className='footer-top-section'>
        <h2 className="foot-title">HOST</h2>
        <ul>
          <li className='dead-link'>Host your yacht</li>
          <li className='dead-link'>Host an Experience</li>
          <li className='dead-link'>Responsible Hosting</li>
          <li className='dead-link'>Resources</li>
          <li className='dead-link'>Community Center</li>
        </ul>
      </div>
      <div className='footer-top-section'>
        <h2 className="foot-title">SUPPORT</h2>
        <ul>
          <li className='dead-link'>COVID Response</li>
          <li className='dead-link'>Help Center</li>
          <li className='dead-link'>Cancellation</li>
          <li className='dead-link'>Trust & Safety</li>
        </ul>
      </div>
    </div>

    <div className='footer-bottom'>
      <div className='footer-bottom-section fbs-1'>
        <p className='dead-link'>©2021 Seabnb, Inc.</p><p>·</p>
        <p className='dead-link'>Privacy</p><p>·</p>
        <p className='dead-link'>Terms</p><p>·</p>
        <p className='dead-link'>Sitemap</p>
      </div>
      <div className='footer-bottom-section fbs-2'>
        <div className='f-settings-container'>
          <p className='f-settings dead-link'>⛒ <span>English (US)</span></p>
          <p className='f-settings dead-link'>₿ <span>BTC</span></p>
        </div>
        <div className='f-emojis'>
          <div className='soc-med-icon'></div>
          <div className='soc-med-icon'></div>
          <div className='soc-med-icon'></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer;