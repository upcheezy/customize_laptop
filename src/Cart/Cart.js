import React, { Component } from 'react';
import './Cart.css';
import Total from '../Total/Total';
import Summary from '../Summary/Summary';

class Cart extends Component {
    
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary 
                features={this.props.features}
                selection={this.props.selection}
                currencyFormat={this.props.currencyFormat}
                />
                <Total 
                    currencyFormat={this.props.currencyFormat}
                    selection={this.props.selection}
                />
            </section>
        )
    }

}

export default Cart;