
import logo from '../../images/Group.svg'
import logoBlack from '../../images/GroupBlack.svg'

import './header.scss';

const Header = (props) => { 

    const {color} = props
    const clazz = color === 'white' ? 'header__wrapper-nav-item-link-white' : 'header__wrapper-nav-item-link-black'
    const src = color === 'white' ? logo : logoBlack
    return ( 
        <header className='header section-outer'>
            <div className="header__wrapper section-inner ">
                <nav className='header__nav'>
                    <img src={src} alt="logo" />
                    <ul className= 'header__wrapper-nav'>
                        <li className='header__wrapper-nav-item'><a href='logo' className={`header__wrapper-nav-item-link ${clazz}`}>Coffee house</a></li>
                        <li className='header__wrapper-nav-item'><a href='logo' className={`header__wrapper-nav-item-link ${clazz}`}>Our coffee</a></li>
                        <li className='header__wrapper-nav-item'><a href='logo' className={`header__wrapper-nav-item-link ${clazz}`}>For your pleasure</a></li>
                    </ul>
                </nav>
            </div>
        
        </header>
        
    )
}


export default Header

