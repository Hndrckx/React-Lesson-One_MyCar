import React, {Component} from 'react'
import Car from './Cars'

class Mycars extends Component {

    // state = {
    //     voitures: [
    //         {marque:' Ford', modele:' Mustang GT' , boite:' Automatique' , prix:' 48.650 €'},
    //         {marque:'Mercedes', modele:' GLE Coupé' , boite:' Manuelle' , prix:' 95.820 €'},
    //         {marque:'Lexus', modele:' Laval' , boite:' Automatique' , prix:' 51.700 €'}
    //     ]
    // }

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

        // return(
        //     <div className="product">
        //         <Car marque={this.state.voitures[0].marque} boite={this.state.voitures[0].boite} prix={this.state.voitures[0].prix}>{this.state.voitures[0].modele}</Car>
        //         <Car marque={this.state.voitures[1].marque} boite={this.state.voitures[1].boite} prix={this.state.voitures[1].prix}>{this.state.voitures[1].modele}</Car>
        //         <Car marque={this.state.voitures[2].marque} boite={this.state.voitures[2].boite} prix={this.state.voitures[2].prix}>{this.state.voitures[2].modele}</Car>
        //     </div>
        // )
    }
}

export default Mycars