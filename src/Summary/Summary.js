import React from 'react';

export default function summary(props) {
    const summary = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selection[feature];
        console.log(selectedOption);
        return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                    {props.currencyFormat.format(selectedOption.cost)}
                </div>
            </div>
        );
    });
    return (
        <>
            {summary}
        </>
    )

}