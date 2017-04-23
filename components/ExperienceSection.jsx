import React from 'react';

import ValueField from './ValueField.jsx';
import EditField from './EditField.jsx';

import { validatePhone, validateLength } from './../validators/validators.js';

class ExperienceSection extends React.Component {

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
            twitter: 'twitter.com/boredpanda',

            // TODO to w sumie przydałoby się przenieść do jakiś zaślepek
            experiences: [{
                dateFrom: '05/2014',
                dateTo: '02/2016',
                position: 'Programista C++',
                tasks: [
                    'projektowanie aplikacji backendowej dla NASA',
                    'szkolenia z programowania dla Pań z recepcji',
                    'wdrażanie innowacyjnych metodyk pracy'
                ]
            }, {
                dateFrom: '03/2016',
                dateTo: '09/2016',
                position: 'Pomoc doraźna dla Google',
                tasks: [
                    'stworzenie kodu który uchronił serwis przed przeciążeniem',
                    //'stworzenie kodu który uchronił serwis przed przeciążeniem, a także przyśpieszył wyszukiwarkę o ok. 40%',
                    'szkolenia dla pracowników'
                ]
            }, {
                dateFrom: '11/2016',
                dateTo: '03/2017',
                position: 'Kasjer w Biedronce',
                tasks: [
                    'Obsługa klienta',
                    'Układanie produktów',
                    'Liczenie pieniędzy',
                    'Transport utargu do banku za pomocą opancerzonego rowerka',
                    'Spanie na zapleczu'
                ]
            }]
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
            <div style={myStyle} className='experienceMainDiv'>
                <div className={'section'}>
                    {/* TODO tutaj strzleczki do kolejnosci */}
                    <ValueField classes={'sectionHeader'} val={this.props.secId} styles={{color:this.props.pageColor}} />


                {this.state.experiences.map((exp, i) => (
                    <div className='rowDiv' key={i}>
                    {this.props.editMode ? (
                        <div>
                            <ValueField classes={'valCol date'} val={exp.dateFrom} />
                            <div className={'dateDash'}>-</div>
                            <ValueField classes={'valCol date'} val={exp.dateTo} />
                            <ValueField classes={'valCol position'} val={exp.position} />
                            <ul className={'tasks'}>
                            <br />
                        {exp.tasks.map((task, j) => (
                            <li key={j}>
                                <ValueField classes={'valCol task'} val={task} />
                                <br />
                            </li>
                        ))}
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <ValueField classes={'valCol date'} val={exp.dateFrom} />
                            <div className={'dateDash'}>-</div>
                            <ValueField classes={'valCol date'} val={exp.dateTo} />
                            <ValueField classes={'valCol position'} val={exp.position} />
                            <ul className={'tasks'}>
                            <br />
                        {exp.tasks.map((task, j) => (
                            <li key={j}>
                                <ValueField classes={'valCol task'} val={task} />
                                <br />
                            </li>
                        ))}
                            </ul>
                        </div>
                    )}
                    </div>
                ))}


                </div>
            </div>
        );
    }
}

export default ExperienceSection;
