import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Main() {
  return (
    <main className="main-content">
      <div className="main-content--name-sec">
        <h2 className="main-content--name">Vivian Bow</h2>
        <h4 className="main-content--title">Fullstack Developer</h4>
      </div>
      <div className="main-content--buttons">
        <a href="#" className="button-email"><span className="buttons-icon"><FontAwesomeIcon icon="envelope" /></span>Email</a>
        <a href="#" className="button-linkedin"><span className="buttons-icon"><FontAwesomeIcon icon={['fab', 'linkedin']} /></span>Linkedln</a>
      </div>
      <div className="main-content--intro">
        <div className="intro-about">
          <h3 className="intro-title">About</h3>
          <p className="intro-content">I'm a fullstack developer :)</p>
        </div>
        <div className="intro-interests">
          <h3 className="intro-title">Interests</h3>
          <p className="intro-content">I love cooking, singing, reading, and bouldering!</p>
        </div>
      </div>
    </main>
  )
}
