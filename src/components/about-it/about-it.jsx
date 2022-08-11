import DividerSection from '../divider-section/divider-section'
import TitleWithDivider from '../titleWithDivider/titleWithDivider'


import './about-it.scss'

const AboutIt = (props) => { 

    const {img, descr, title, country, price} = props.data[0]

    return ( 
        <section className='aboutIt__wrapper section-outer'>
            <div className='section-inner section-inner--wide'> 
                <div className='aboutIt__wrapper-img'>
                <img  src={img} alt={img} />
                </div>

                <div className='aboutIt__wrapper-descr'>
                   
                    <TitleWithDivider title = {title} />
                    <div className='aboutIt__wrapper-text'>
                        <div className='aboutIt__wrapper-text-country'><span>Country: </span>{country}</div>
                        <div className='aboutIt__wrapper-text-main'><span>Description: </span>{descr}</div>
                        <div className='aboutIt__wrapper-text-price'><span>Price: </span>{price}</div>
                    </div>

                </div>

            </div>
                <DividerSection/>
        </section>
    )

}

export default AboutIt