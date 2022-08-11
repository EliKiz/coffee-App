import { Component } from "react";
import Header from "../header/header";
import Promo from "../promo/promo";
import AboutUs from "../about-Us/about-us";
import OurBest from "../our-best/our-best";
import AboutOur from "../about-our/about-our";
import Filter from "../filter/filter";
import AboutIt from "../about-it/about-it";
import Footer from "../footer/footer";

// img 
import solimo from '../../images/our-best/Solimo.png';
import presto from '../../images/our-best/Presto.png';
import Aromicstico from '../../images/our-best/Aromicstico.png';
import girl from '../../images/girlCoffee.png'
import mask from '../../images/MaskGroup.jpg'

import './app.scss';


class App extends Component { 
    constructor(props) { 
        super(props);
        this.state = { 

            data: { 
                ourBest : [ 
                    {img: solimo, name: 'Solimo Coffee Beans 2 kg', price: '10.73$', description: 'the most popular coffee', id : 1 },
                    {img: presto, name: 'Presto Coffee Beans 1 kg', price: '10.73$', description: 'the most popular coffee', id : 2},
                    {img: Aromicstico, name: 'Solimo Coffee Beans 2 kg', price: '10.73$', description: 'the most popular coffee', id : 3},
                ],
                about : [
                    {
                        img: girl, 
                        title: 'About our beans',
                        descr: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.Afraid at highly months do things on at. Situation recommend objection do intentionso questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.',
                        country: null,
                        price: null,
                        divider: true
                    },  
                ],
                aboutIt : [
                    {
                        img: mask, 
                        title: 'About it',
                        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        country: 'Brasil',
                        price: "16.99$",
                        divider: true
                    },  
                ],
                assortment : [
                    { img: Aromicstico, name: 'aromistico Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 1 },
                    { img: Aromicstico, name: 'coper Coffee 1 kg', country: 'Kenya', price: '6.99$', id: 2 },
                    { img: Aromicstico, name: 'mokko Coffee 1 kg', country: 'Columbia', price: '6.99$', id: 3 },
                    { img: Aromicstico, name: 'porif Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 4 },
                    { img: Aromicstico, name: 'makka Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 5 },
                    { img: Aromicstico, name: 'realto Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 6 },
                ]
            },
            term : '',
            filter : '',
    
        }
    }

    searchEmp = (items, term) => { 
        if(term.length === 0) return items

        return items.filter(item => { 
            return item.name.indexOf(term ) > -1 
        })
    }

    onUpdateSearch = (term) =>  {
        this.setState({term})
    }

    filterPost(items, filter) { 
        switch(filter) { 
            case 'Brazil': 
                return items.filter(item => item.country === 'Brazil')
            case 'Kenya': 
                return items.filter(item => item.country === 'Kenya')
            case 'Columbia': 
                return items.filter(item => item.country === 'Columbia')
            default : 
            return items;
        }
    }

    onFilterSelect = (filter) => { 
        this.setState({filter})
    }

    render() { 

        const {data: {ourBest, about, aboutIt, assortment}, term, filter} = this.state
        const visibleDate = this.filterPost(this.searchEmp(assortment, term), filter) ;
        
        console.log('data', ourBest)
      

        return(
            <div className="app">
                <Promo/>
                <AboutUs/>

                <OurBest data = {ourBest}/>

                <AboutOur data = {about}/>
                <Filter 
                onFilterSelect = {this.onFilterSelect}
                filter = {filter}
                onUpdateSearch = {this.onUpdateSearch}
                data = {visibleDate} />
                
                <AboutIt data = {aboutIt}/>
                <Footer/>
            </div>

        )
    }
    
}
console.log('working')


export default App;