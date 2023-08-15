import React from 'react'
import './Home.css'
import DisneyLogo from '../../image/logo-d-plus.svg'
import htmlLogo from '../../image/html.png'
import cssLogo from '../../image/css.png'
import javascriptLogo from '../../image/javascript.png'
import bootstrapLogo from '../../image/bootstrap.png'
import sassLogo from '../../image/sass.png'
import reactLogo from '../../image/react.png'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className="home-container">
            <div className="hero-section">
                <h1>S Dhananjai Kumar <br /></h1><b>A Frontend Developer</b>
                <p className='desc'>As a fresher frontend developer, I am enthusiastic about translating design concepts into interactive and visually appealing web interfaces. Proficient in HTML, CSS, and JavaScript, with a solid foundation in responsive design principles. Eager to learn and adapt to new technologies and frameworks, while collaborating effectively with cross-functional teams. Committed to delivering user-centric and engaging web experiences while continuously refining my skills in frontend development.</p>
            </div> 

            <h2 className='section-heading'>Projects</h2>

            <div className="projects">

                <Link to="https://github.com/Dhananjai29/Disney-Hotstar-Clone" target='_blank' className="card">
                    <img src={DisneyLogo} alt="" />
                </Link> 
                <Link to="https://github.com/Dhananjai29/Disney-Hotstar-Clone" target='_blank' className="card">
                    In Progress
                </Link> 
                <Link to="https://github.com/Dhananjai29/Disney-Hotstar-Clone" target='_blank' className="card">
                    In Progress
                </Link> 
                <Link to="https://github.com/Dhananjai29/Disney-Hotstar-Clone" target='_blank' className="card">
                    In Progress
                </Link> 
                {/* <Link to="https://github.com/Dhananjai29/Disney-Hotstar-Clone" target='_blank' className="card">
                    In Progress
                </Link>  
                <Link to="https://github.com/Dhananjai29/Disney-Hotstar-Clone" target='_blank' className="card">
                    In Progress
                </Link> 
                <Link to="https://github.com/Dhananjai29/Disney-Hotstar-Clone" target='_blank' className="card">
                    In Progress
                </Link> 
                <Link to="https://github.com/Dhananjai29/Disney-Hotstar-Clone" target='_blank' className="card">
                    In Progress
                </Link>  */}
            </div>  
            
            <h2 className="section-heading">Skills</h2>

            <div className="skills">
                <Link to='https://html.com/' target='_blank' className="card">
                        <img src={htmlLogo} alt="" />
                </Link>
                <Link to='https://www.w3.org/Style/CSS/Overview.en.html' target='_blank' className="card">
                        <img src={cssLogo} alt="" />
                </Link> 
                <Link to='https://www.javascript.com/' target='_blank' className="card">
                       <img src={javascriptLogo} alt="" /> 
                </Link>
                <Link to='https://getbootstrap.com/' target='_blank' className="card">
                        <img src={bootstrapLogo} alt="" />
                </Link>  
                <Link to='https://sass-lang.com/' target='_blank' className="card">
                        <img src={sassLogo} alt="" />
                </Link>
                <Link to='https://react.dev/' target='_blank' className="card">
                        <img src={reactLogo} alt="" />
                </Link>  
            </div> 
        </div> 
    </>
  )
}

export default Home
