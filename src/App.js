import React from "react"
import ProfilePic from "./components/ProfilePic"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitterSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faTwitterSquare,faInstagramSquare, faGithubSquare)

export default function App() {
  return(
    <div className="container">
      <ProfilePic />
      <Main />
      <Footer />
    </div>
  )
}
