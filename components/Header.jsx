import React from 'react';

import ValueField from './ValueField.jsx'; //bez jsx?
import EditField from './EditField.jsx'; //bez jsx?

import { validateName, validateJob } from './../validators/validators.js';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Alojzy',
			surname: 'Mikser',
            job: 'Spawacz',
            editMode: false
        };
        this.updateState = this.updateState.bind(this);
        this.changeMode = this.changeMode.bind(this);
        //this.validateKey = this.validateKey.bind(this);
    };

	componentDidMount() {
		//var that = this;
		document.getElementById('changeHeader').addEventListener('click', this.changeMode, false);
	}

    validateKey(key, value) {
        if (key === 'name' || key === 'surname') {
            return validateName(value);
        } else if (key === 'job') {
            return validateJob(value);
        }
        return true;
    }

    updateState(e) {
        const id = e.target.id;
        const val = e.target.value;
        if (this.validateKey(id, val)) {
            this.setState({ [id]: val });
        }
    };

    changeMode() {
        console.log(`changeMode editMode=${this.state.editMode}`);
        this.setState(Object.assign({}, this.state, {editMode: !this.state.editMode}));
    }

    render() {
        const myStyle = {
            backgroundColor: 'yellow',
            //border: 'solid 2px',
            //borderColor: '#979797',
            width: '100%',
            height: 100,
            display: 'inline-table'
            //margin: '60px auto 60px auto'
            //style={{display: 'inline-block'}}
        }

//        let editMode = false
//        console.log(`editMode ${editMode}`);

        return (
            <div style={myStyle}>
            {this.state.editMode ? (
                <div style={{margin: '10px 20px 0px 20px'}}>
                    <EditField styles={{fontSize:'24px', width:'250px'}} id={'name'} val={this.state.name} updateState={this.updateState} />
                    <EditField styles={{fontSize:'24px', width:'250px', marginLeft:'20px'}} id={'surname'} val={this.state.surname} updateState={this.updateState} />
                    <br/>
                    <EditField styles={{fontSize:'20px', width:'350px', marginTop:'5px'}} id={'job'} val={this.state.job} updateState={this.updateState} />
                    <button id='changeHeader' style={{float:'right', margin:'5px 20px 0px 0px', fontSize:'20px'}}>zzmien</button>
                </div>
            ) : (
                <div style={{margin: '10px 20px 0px 20px'}}>
                    <ValueField styles={{fontSize:'32px'}} val={this.state.name}/>
                    <ValueField styles={{fontSize:'32px', marginLeft:'10px'}} val={this.state.surname}/>
                    <br/>
                    <ValueField styles={{fontSize:'24px'}} val={this.state.job}/>
                    <button id='changeHeader' style={{float:'right', margin:'5px 20px 0px 0px', fontSize:'20px'}}>zzmien</button>
                </div>
            )}
            </div>
        );
    }
}

export default Header;
