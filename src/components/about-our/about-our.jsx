import TitleWithDivider from '../titleWithDivider/titleWithDivider'
import DividerSection from '../divider-section/divider-section'


import './about-our.scss'



const AboutOur = (props) => { 

    const {img, descr, title,} = props.data[0]
    
    return ( 
        <section className='about__wrapper section-outer'>
            <div className='about__wrapper-inner section-inner '> 
                <div className='about__wrapper-img'>
                <img  src={img} alt={img} />
                </div>

                <div className='about__wrapper-descr'>
                   
                    <TitleWithDivider title = {title} />
                    <span>{descr}</span>
                </div>

            </div>
                <DividerSection/>
        </section>
    )
}

export default AboutOur