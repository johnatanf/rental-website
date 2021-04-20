import * as React from "react"
import "../css/style.css"

const Footer = () => {
  return (
    <footer className="footer">
        <p className="footer__copyright">Created by Johnatan Fallen &copy; 2021. <a href="https://johnatanf.github.io" target="_blank">View my portfolio</a>.</p>
        <hr />
        <p className="footer__information">The hotel presented in this website is fake. This website was created for my portfolio and is meant to serve as a demo. Images were obtained from <a href="https://unsplash.com/" target="_blank">Unsplash</a>, and icons from <a href="https://icomoon.io/" target="_blank">IcoMoon</a>.</p>
    </footer>
  )
}

export default Footer
