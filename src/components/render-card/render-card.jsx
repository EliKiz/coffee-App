import './render-card.scss'

import RenderCardItem from '../our-best/our-best'

const RenderCard = ({data}) =>  {

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

        <ul className='our-best-cards'>
            {elements}
        </ul>
    )

}

export default RenderCard