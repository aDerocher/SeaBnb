import './Footer.css';

const Footer = () => {

  return (
  <div className="footer-container main-container">
    <div className='footer-top'>
      <div className='footer-top-section'>
        <h2 className="foot-title">ABOUT</h2>
        <ul>
          <li><a href="https://github.com/aDerocher" className="github-link">Creators Github ⚓</a></li>
          <li>How Seabnb works</li>
          <li>Newsroom</li>
          <li>Seabnb 2021</li>
          <li>Investors</li>
          <li>Seabnb Plus</li>
          <li>Careers</li>
          <li>Seabnb for "Work"</li>
          <li>Founder's Letter</li>
        </ul>
      </div>
      <div className='footer-top-section'>
        <h2 className="foot-title">COMMUNITY</h2>
        <ul>
          <li>Accessibility</li>
          <li>Diversity</li>
          <li>Seabnb Associates</li>
          <li>Guest Referrals</li>
          <li>Gift Cards</li>
          <li>Seabnb.org</li>
        </ul>
      </div>
      <div className='footer-top-section'>
        <h2 className="foot-title">HOST</h2>
        <ul>
          <li>Host your yacht</li>
          <li>Host an Experience</li>
          <li>Responsible Hosting</li>
          <li>Resources</li>
          <li>Community Center</li>
        </ul>
      </div>
      <div className='footer-top-section'>
        <h2 className="foot-title">SUPPORT</h2>
        <ul>
          <li>COVID Response</li>
          <li>Help Center</li>
          <li>Cancellation</li>
          <li>Trust & Safety</li>
        </ul>
      </div>
    </div>

    <div className='footer-bottom'>
      <div className='footer-bottom-section fbs-1'>
        <p>©2021 Seabnb, Inc.</p><p>·</p>
        <p>Privacy</p><p>·</p>
        <p>Terms</p><p>·</p>
        <p>Sitemap</p>
      </div>
      <div className='footer-bottom-section fbs-2'>
        <div className='f-settings-container'>
          <p className='f-settings'>⛒ <span>English (US)</span></p>
          <p className='f-settings'>₿ <span>BTC</span></p>
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