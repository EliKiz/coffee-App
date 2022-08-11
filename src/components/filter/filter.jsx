import { Component } from 'react'

import RenderCardItem from '../render-card-item/render-card-item'

import './filter.scss'

class Filter extends Component { 
    constructor(props) { 
        super(props);
        this.state = { 
            term : ''
        }
    }

    onUpdateSearch = (e) =>  {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render() { 

        const btnData = [
            {name: 'ALL', label : 'All'},
            {name: 'BR', label : 'Brazil'},
            {name: 'KN', label : 'Kenya'},
            {name: 'CO', label : 'Columbia'},
    
        ]
        
        const {data, filter, onFilterSelect} = this.props
    
        let elem = data.map(item => { 
            const {id, ...itemProps} = item

            return ( 
                <RenderCardItem 
                    key = {id} 
                    {...itemProps} 
                    />
            )
        })
        
        
        if(elem.length === 0) {
             elem = <div  style={{ display: 'flex', 
                                justifyContent: 'center', 
                                textAlign: 'center', 
                                padding : 25, }}>
                    We don't have coffee like this.
                    </div>
        }
    
        const buttons = btnData.map(({name, label}) => { 
            const active = filter === label;
            const clazz = active ? 'wrapper__btn-item-active' : 'wrapper__btn-item'

            return ( 
                <button 
                onClick={() => onFilterSelect(label)}
                type='button'
                className = {`wrapper__btn-item ${clazz}`}
                key={name}
                >{label}</button>
            )
        })

        return ( 
            <section className='filter__wrapper section-outer'> 
                <div className='wrapper-search section-inner'>
                    <div className="filter__wrapper-search">
                        <span>Looking for</span>
                        <input 
                        onChange={this.onUpdateSearch}
                        className='filter__wrapper-search-input' 
                        type="text" 
                        value={this.state.term}
                        placeholder='Start typing here...'/>
                    </div>

                    <div className="filter__wrapper-filter">
                        <span>Of filter</span>
                        <div className="wrapper__btn">
                            {buttons}
                        </div>
                    </div>
                </div>
                <div className='filter__wrapper-cards'>
                    <ul className='filter-cards'>
                    {elem }
                    </ul>
                </div>
    
    
            </section>
        )
    }
} 
    



export default Filter