import React, {Component} from 'react'
import Car from './Cars'

class Mycars extends Component {

    noCopy = () => {
        alert('Ces données sont protégées')
    }

    mouseStyle = (e) => {
        if(e.target.classList.contains('styled')){
            e.target.classList.remove('styled')  
        } else {
            e.target.classList.add('styled')
        }
    }

    render(){
        return(
            <div className="product">
               <h1 onMouseOver={this.mouseStyle}>{this.props.title}</h1>
               <p onCopy={this.noCopy}> Here is your dream </p>
               <Car model=" Mustang GT" price=" 48.650 €"> Ford</Car>
               <Car model=" GLE Coupé" price=" 95.820 €"> Mercedes</Car>
               <Car model=" Laval" price=" 51.700 €"> Lexus</Car>
            </div>
        )
    }
}

export default Mycars