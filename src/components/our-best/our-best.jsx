import Title from '../title/title'
import RenderCardItem from '../render-card-item/render-card-item'

import './our-best.scss'

const OurBest = ({data}) =>  { 

  

    const elements = data.map(item => { 
        const {id, ...itemProps} = item
    
        return ( 
            <RenderCardItem 
                key = {id} 
                {...itemProps} 
                />
        )
    })

    return ( 

        <section className='our-best section-outer'>
            <div className="container section-inner">
                <Title title='Our best' />
                <ul className='our-best-cards'>
                    {elements}
                </ul>
            </div>
        </section>

    )
}

export default OurBest