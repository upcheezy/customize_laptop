import React, { Component } from 'react';
import './Cart.css';
import Total from '../Total/Total';

class Cart extends Component {
    render() {
        const summary = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selection[feature];
            console.log(selectedOption);
            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature} </div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                        {this.props.currencyFormat.format(selectedOption.cost)}
                    </div>
                </div>
            );
        });
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <div>{summary}</div>
                <Total 
                    currencyFormat={this.props.currencyFormat}
                    selection={this.props.selection}
                />
            </section>
        )
    }

}

export default Cart;