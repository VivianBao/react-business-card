import React from "react"
import ProfilePic from "./components/ProfilePic"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitterSquare, faInstagramSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faTwitterSquare, faInstagramSquare, faGithubSquare, faLinkedin, faEnvelope)

export default function App() {
  return(
    <div className="container">
      <ProfilePic />
      <Main />
      <Footer />
    </div>
  )
}
