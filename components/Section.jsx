import React from 'react';

import ValueField from './ValueField.jsx'; //bez jsx?
import EditField from './EditField.jsx'; //bez jsx?

import { validatePhone, validateLength } from './../validators/validators.js';

class Section extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
//            name: 'Alojzy',
//			surname: 'Mikser',
//            job: 'Spawacz',
//            editMode: false
            phone: '503112233',
            email: 'wesoly_romek997@wp.pl',
            www: 'javascript.crockford.com',
            twitter: 'twitter.com/boredpand'
        };
        this.updateState = this.updateState.bind(this);
        //  this.changeMode = this.changeMode.bind(this);
        //this.validateKey = this.validateKey.bind(this);
    };

    validateKey(key, value) {
        if (key === 'phone') {
            return validatePhone(value);
        } else {
            return validateLength(value, 30);
        }
    }

    updateState(e) {
        const id = e.target.id;
        const val = e.target.value;
        if (this.validateKey(id, val)) {
            this.setState({ [id]: val });
        }
    };

//    changeMode() {
//        console.log(`changeMode editMode=${this.state.editMode}`);
//        this.setState(Object.assign({}, this.state, {editMode: !this.state.editMode}));
//    }

    render() {
        const myStyle = {
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
                {/*
            {this.props.editMode ? (
                <div style={{margin: '10px 20px 0px 20px'}}>
                    <EditField styles={{fontSize:'24px', width:'250px'}} id={'name'} val={this.state.name} updateState={this.updateState} />
                    <EditField styles={{fontSize:'24px', width:'250px', marginLeft:'20px'}} id={'surname'} val={this.state.surname} updateState={this.updateState} />
                    <br/>
                    <EditField styles={{fontSize:'20px', width:'350px', marginTop:'5px'}} id={'job'} val={this.state.job} updateState={this.updateState} />
                </div>
            ) : (
            */}
                <div className={'section'}>
                    {/* TODO tutaj strzleczki do kolejnosci */}
                    <ValueField classes={'sectionHeader'} val={this.props.secId} styles={{color:this.props.pageColor}} />
                    <br />
                    <div className='rowDiv'>
                        <ValueField classes={'descCol'} val={'Telefon'} />
                    {this.props.editMode ? (
                        <EditField classes={'editValCol'} id={'phone'} val={this.state.phone} updateState={this.updateState} />
                    ) : (
                        <ValueField classes={'valCol'} val={this.state.phone} />
                    )}
                        <br />
                    </div>
                    <div className='rowDiv'>
                        <ValueField classes={'descCol'} val={'E-mail'} />
                    {this.props.editMode ? (
                        <EditField classes={'editValCol'} id={'email'} val={this.state.email} updateState={this.updateState} />
                    ) : (
                        <ValueField classes={'valCol'} val={this.state.email} />
                    )}
                        <br />
                    </div>
                    <div className='rowDiv'>
                        <ValueField classes={'descCol'} val={'Strona WWW'} />
                    {this.props.editMode ? (
                        <EditField classes={'editValCol'} id={'www'} val={this.state.www} updateState={this.updateState} />
                    ) : (
                        <ValueField classes={'valCol'} val={this.state.www} />
                    )}
                        <br />
                    </div>
                    <div className='rowDiv'>
                        <ValueField classes={'descCol'} val={'Twitter'} />
                    {this.props.editMode ? (
                        <EditField classes={'editValCol'} id={'twitter'} val={this.state.twitter} updateState={this.updateState} />
                    ) : (
                        <ValueField classes={'valCol'} val={this.state.twitter} />
                    )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;
