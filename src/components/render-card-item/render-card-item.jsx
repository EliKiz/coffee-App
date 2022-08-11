import './render-card-item.scss'

export default function RenderCardItem(props) { 
	
    const {img, name, price, description, country} = props

    return ( 
        
        <li className= 'coffee-card coffee-card_our-best' >
			<img src={img} alt="thumbnail" className='coffee-card__img' />
			<h3 className="coffee-card__name">{name}</h3>
			<div className="coffee-card__country">{description}</div>
			<div className="coffee-card__country">{country}</div>
			<div className="coffee-card__price">{price}</div>
		</li>
    )

}