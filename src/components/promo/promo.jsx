import Header from '../header/header';
import Divider from '../divider/divider';
import './promo.scss';


const Promo = () => { 

    return(
        <section className='promo'>
            <Header color = 'white'/>
			<div className="container">
			<h1 className='promo__title'>Everything You Love About Coffee</h1>
            <Divider color = 'white'/>
			<div className="promo__text">
				We makes every day full of energy and taste <br /> <span>Want to try our beans?</span> 
			</div>
			<a href="#" className="promo__more">More</a>
			</div>
		
		</section>
    )

}

export default Promo