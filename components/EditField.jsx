import React from 'react';
import Field from './Field.jsx';

class EditField extends Field {

//    constructor(props) {
//        super(props);
//        this.state = {
//            val: 'initial data'
//        };
//        this.updateState = this.updateState.bind(this)
//    };
//
//    updateState(e) {
//        this.setState({ val: e.target.value });
//    };


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
                
                    <input value={this.props.data} />
                {/*
                <input value={this.props.data} onChange={this.props.updateState(this.props.data)}/>
                */}
                {/* 
                <input value={this.props.data} onChange={console.log('ddd')}/>
                */}
            </div>
        );
    }
}

//EditField.props = { //TODO nie da sie wyzej tego wsadzic?
//    val: React.PropTypes.string
//}
//
//EditField.defaultProps = {
//    val: 'Ignacy Gąbka'
//}

export default EditField;
