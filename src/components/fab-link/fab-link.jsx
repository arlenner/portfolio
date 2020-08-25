import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IS_MOBILE } from '../../helpers/is-mobile'

const gethw = _ => IS_MOBILE ? '7vh' : '5vw'

export const FabLink = ({icon, href, x, y}) => (
    <a  href={href}
        className='fab-link'
        style={{
            gridRow: `${y}`,
            gridColumn: `${x}`,
            height: gethw(),
            width: gethw()
        }}>
       <FontAwesomeIcon icon={icon} size={IS_MOBILE() ? '2x' : '4x'}/> 
    </a>
)