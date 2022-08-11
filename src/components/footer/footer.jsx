import Divider from '../divider/divider'
import Header from '../header/header'
import './footer.scss'

const Footer = () => { 

    return ( 
        <footer className='footer section-outer'> 
            <div className='footer-wrapper section-inner'>
                <div className="footer">
                <Header color = 'black'/>
                <Divider/>

                </div>
            </div>
        </footer>
        

    )

}

export default Footer