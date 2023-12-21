import React from 'react'
import ResponsiveAppBar from './Navbar'
import Landing from './Landing'
import Footer, { FooterFour} from './Footer'

export default function Main() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Landing/>
      <Footer/>
    </div>
  )
}
