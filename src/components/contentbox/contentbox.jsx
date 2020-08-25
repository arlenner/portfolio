import React, { useReducer, useEffect } from 'react'
import { Fade } from 'react-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContentBox = ({title, subtitle, icon, content, full}) => {

    return (
        <> 
            <Fade bottom>
                <div className={full ? "content-box-container-full" : "content-box-container"}>
                    <div className={full ? "content-box-inner-full" : "content-box-inner"}>
                        <div className="content-box-header">
                            <h2 className="content-box-title">{title} | </h2>
                            <FontAwesomeIcon icon={icon} size={full ? '4x' : '2x'} />
                        </div>                
                        <h3 className="content-box-subtitle">{subtitle}</h3>
                        <p className="content-box-content">{content}</p>
                    </div>
                </div>
            </Fade>
        </>
    )
}