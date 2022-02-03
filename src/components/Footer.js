import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <div className='social-icon'>
          <a href="#"><FontAwesomeIcon icon={['fab', 'twitter-square']} /></a>
        </div>
        <div className='social-icon'>
          <a href="#"><FontAwesomeIcon icon={['fab', 'instagram-square']} /></a>
        </div>
        <div className='social-icon'>
          <a href="#"><FontAwesomeIcon icon={['fab', 'github-square']} /></a>
        </div>
      </div>
    </footer>
  )
}
