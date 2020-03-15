import React, { Component } from 'react';
import './Customize.css';
import slugify from 'slugify';

class Customize extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <div key={itemHash} className="feature__item">
                        {/* cusomize item component  */}
                        <input
                            type="radio"
                            id={itemHash}
                            className="feature__option"
                            name={slugify(feature)}
                            checked={item.name === this.props.selection[feature].name}
                            onChange={e => this.props.handleUpdate(feature, item)}
                        />
                        <label htmlFor={itemHash} className="feature__label">
                            {item.name} ({this.props.currencyFormat.format(item.cost)})
            </label>
                    </div>
                );
            });

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <div>{features}</div>
            </form>
        )
    }

}

export default Customize;