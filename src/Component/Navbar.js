import React from 'react'
import './Navbar.css'
import { Github, Home, Instagram, Layers, Linkedin, Twitter, User, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="links">
            <Link to='/portfolio' className='link'><Home />&nbsp;&nbsp;&nbsp;&nbsp;<span>Home</span></Link>
            <Link to='about' className='link'><User />&nbsp;&nbsp;&nbsp;&nbsp;<span>About Me</span></Link>
            <p>Socials</p>
            <Link to='https://twitter.com/Dhananj34872012' target='_blank' className='link facebook'><Twitter />&nbsp;&nbsp;&nbsp;&nbsp;<span>Twitter</span></Link>
            <Link target='_blank' className='link instagram'><Instagram />&nbsp;&nbsp;&nbsp;&nbsp;<span>Instagram</span></Link>
            <Link to='https://www.linkedin.com/in/s-dhananjai-2903tm/' target='_blank' className='link linkedin'><Linkedin />&nbsp;&nbsp;&nbsp;&nbsp;<span>Linkedin</span></Link>
            <Link to='https://github.com/Dhananjai29' target='_blank' className='link github'><Github />&nbsp;&nbsp;&nbsp;&nbsp;<span>Github</span></Link>
            <Link target='_blank' className='link stackoverflow'><Layers />&nbsp;&nbsp;&nbsp;&nbsp;<span>Stackoverflow</span></Link>

            <p>Projects</p>

            <Link to="https://github.com/Dhananjai29/Disney-Hotstar-Clone" target='_blank' className='link'><Video/> &nbsp;&nbsp;&nbsp;&nbsp; <span>Disney+ Hotstar</span></Link>
            {/* <Link to="disney+hotstarclone" target='_blank' className='link'><span>Disney+ Hotstar Clone</span></Link>
            <Link to="disney+hotstarclone" target='_blank' className='link'><span>Disney+ Hotstar Clone</span></Link>
            <Link to="disney+hotstarclone" target='_blank' className='link'><span>Disney+ Hotstar Clone</span></Link>
            <Link to="disney+hotstarclone" target='_blank' className='link'><span>Disney+ Hotstar Clone</span></Link>
            <Link to="disney+hotstarclone" target='_blank' className='link'><span>Disney+ Hotstar Clone</span></Link> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
