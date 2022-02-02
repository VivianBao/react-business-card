import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="footer">
      <p>Find me at:</p>
      {/* <FontAwesomeIcon icon={['fab', 'twitter']} />
      <FontAwesomeIcon icon={['fab', 'instagram']} />
      <FontAwesomeIcon icon={['fab', 'github']} /> */}
      <FontAwesomeIcon icon={['fab', 'twitter-square']} />
      <FontAwesomeIcon icon={['fab', 'instagram-square']} />
      <FontAwesomeIcon icon={['fab', 'github-square']} />
    </footer>
  )
}
