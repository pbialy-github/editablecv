import React from 'react';
import Field from './Field.jsx';

class ValueField extends Field {

    render() {
        const myStyle = {
            //backgroundColor: 'yellow',
            //border: 'solid 2px',
            //borderColor: '#979797',
            //width: '100%',
            //height: 100,
            //display: 'inline-table'
            //margin: '60px auto 60px auto'
            //margin: '10px'
        }

        return (
            <div style={myStyle}>
                <p>{this.props.val}</p>
            </div>
        );
    }
}

ValueField.props = { //TODO nie da sie wyzej tego wsadzic?
    val: React.PropTypes.string
}

ValueField.defaultProps = {
    val: 'Ignacy Gąbka'
}

export default ValueField;
