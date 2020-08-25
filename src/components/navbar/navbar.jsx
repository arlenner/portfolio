import React from 'react'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fade } from 'react-reveal'

const twitter = 'https://twitter.com/Rossketeer'
const medium = 'https://medium.com/@arlenross02'

export const Navbar = () => (
    <>
        <nav className="nav-container">
            <div className="nav-items">
                <Fade clear>
                    <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
                </Fade>
            </div>
            <div className="nav-items">
                <Fade clear cascade>
                    <a href={twitter}>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href={medium}>
                        <FontAwesomeIcon icon={faMedium} />
                    </a>
                </Fade>
            </div>
        </nav>
    </>
)