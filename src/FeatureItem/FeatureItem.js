import React from 'react';
import Item from '../Item/Item'

export default function FeatureItem(props) {
    return (
        <>
            <Item
                handleUpdate={props.handleUpdate}
                features={props.features}
                selection={props.selection}
                currencyFormat={props.currencyFormat}
            />
            {/* {features} */}
        </>
    )

}