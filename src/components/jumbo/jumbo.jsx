import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Fade, Bounce } from 'react-reveal'
import { IS_MOBILE } from '../../helpers/is-mobile'

const $ = (selector, target = document) => target.querySelector.call(target, selector)

const handleScroll = e => $('.jumbo-image').style.backgroundPosition = 
    `center ${ (IS_MOBILE() ? -200 : -70) + (window.scrollY+1)/(IS_MOBILE() ? 7 : 2)}px`

window.addEventListener('scroll', handleScroll)

export const Jumbo = ({title, subtitle, withIcon}) => (
    <>
        <div className="jumbo-container">
            <div className="jumbo-image">
                <Fade top cascade>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <div className="jumbo-chev">
                        {withIcon 
                            ? (
                                <Bounce>
                                    <FontAwesomeIcon icon={faChevronDown} size='4x'></FontAwesomeIcon>
                                </Bounce>
                            ): <></>
                        }
                    </div>
                </Fade>
            </div>
        </div>
    </>
)