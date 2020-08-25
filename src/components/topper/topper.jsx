import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faCircle } from '@fortawesome/free-solid-svg-icons'
import { IS_MOBILE } from '../../helpers/is-mobile'

const handleClick = _ => window.scrollTo({
    top: 0,
    behavior: 'smooth'
})

export const Topper = () => {
    const [isOver, setOver] = useState(false)
    const [show, setShow] = useState(false)
    window.addEventListener('scroll', e => window.scrollY > .5*window.screen.height ? setShow(true) : setShow(false))

    return (
        <div 
            className={show ? 'topper' : 'topper-hidden'}            
            onMouseOver={_ => setOver(true)}
            onMouseLeave={_ => setOver(false)}
            onClick={handleClick} >
            { isOver || IS_MOBILE()
                ? (<FontAwesomeIcon icon={faChevronUp} size='2x'></FontAwesomeIcon>)
                : (<FontAwesomeIcon icon={faCircle} size='lg'></FontAwesomeIcon>)
            }
        </div>
    )  
}