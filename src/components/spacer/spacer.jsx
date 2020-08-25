import React from 'react'
import { Fade } from 'react-reveal'

export const Spacer = ({label = ''}) => (
    <>
        <Fade bottom>
            <div className="spacer">{label ? label : ''}</div>
        </Fade>
    </>
)