import React from 'react';

import ValueField from './ValueField.jsx';
import EditField from './EditField.jsx';

import { validatePhone, validateLength } from './../validators/validators.js';

class DataSection extends React.Component {

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
            twitter: 'twitter.com/boredpanda'
        };
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

    updateState(id, e) {
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
            <div style={myStyle} className='dataMainDiv'>
                <div className={'section'}>
                    {/* TODO tutaj strzleczki do kolejnosci */}
                    <ValueField classes={'sectionHeader'} val={this.props.secId} styles={{color:this.props.pageColor}} />
                    <br />
                    <div className='rowDiv'>
                        <ValueField classes={'descCol'} val={'Telefon'} /> {/* TODO albo na sekcje beda rozne komponenty, albo tu trzeba bedzie jakas petle po tablicy przekazywanej zrobic */}
                    {this.props.editMode ? (
                        <EditField classes={'editValCol'} id={'phone'} val={this.state.phone} updateState={this.updateState.bind(this, 'phone')} />
                    ) : (
                        <ValueField classes={'valCol'} val={this.state.phone} />
                    )}
                        <br />
                    </div>
                    <div className='rowDiv'>
                        <ValueField classes={'descCol'} val={'E-mail'} />
                    {this.props.editMode ? (
                        <EditField classes={'editValCol'} val={this.state.email} updateState={this.updateState.bind(this, 'email')} />
                    ) : (
                        <ValueField classes={'valCol'} val={this.state.email} />
                    )}
                        <br />
                    </div>
                    <div className='rowDiv'>
                        <ValueField classes={'descCol'} val={'Strona WWW'} />
                    {this.props.editMode ? (
                        <EditField classes={'editValCol'} val={this.state.www} updateState={this.updateState.bind(this, 'www')} />
                    ) : (
                        <ValueField classes={'valCol'} val={this.state.www} />
                    )}
                        <br />
                    </div>
                    <div className='rowDiv'>
                        <ValueField classes={'descCol'} val={'Twitter'} />
                 {/* TODO klikalny link? LinkField? */}
                    {this.props.editMode ? (
                        <EditField classes={'editValCol'} val={this.state.twitter} updateState={this.updateState.bind(this, 'twitter')} />
                    ) : (
                        <ValueField classes={'valCol'} val={this.state.twitter} />
                    )}
                    </div>
                </div>
            </div>
        );
    }
}

export default DataSection;
