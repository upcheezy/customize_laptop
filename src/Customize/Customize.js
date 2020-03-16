import React, { Component } from 'react';
import './Customize.css';
import FeatureItem from '../FeatureItem/FeatureItem';

class Customize extends Component {
    render() {

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FeatureItem
                handleUpdate={this.props.handleUpdate}
                features={this.props.features}
                selection={this.props.selection}
                currencyFormat={this.props.currencyFormat}
                />
            </form>
        )
    }

}

export default Customize;