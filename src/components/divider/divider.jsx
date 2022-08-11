import iconWhite from '../../images/BeansWhite.svg'
import iconBlack from '../../images/BeansBlack.svg'

import './divider.scss'

const Divider = (props) => { 

    const { color } = props;
    const src = color === 'white' ? iconWhite : iconBlack;

    return ( 
        <div className= 'beans-divider'>
            <img src={src} alt="beans" />
        </div>
    )

}

export default Divider