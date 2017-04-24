import React from 'react';

import ValueField from './ValueField.jsx';
import EditField from './EditField.jsx';

import { validateOnlyDigits, validateLength } from './../validators/validators.js';

class SkillsSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // TODO to w sumie przydałoby się przenieść do jakiś zaślepek
            skills: [{
                name: 'Dowodzenie',
                val: '70%'
            }, {
                name: 'Kondycja',
                val: '100%'
            }, {
                name: 'Estetyka',
                val: '20%'
            }],
        };
        this.addSkill = this.addSkill.bind(this);
    };

    validateKey(key, value) {
        if (key === 'name') {
            return validateLength(value, 12);
        } else if (key === 'val'){
            return validateOnlyDigits(value, 2) && (value <= 10);
        } else {
            return validateLength(value, 30);
        }
    }

    updateSkillName(skillNr,  e) {
        const name = e.target.value;
        if (this.validateKey('name', name)) {
            this.state.skills[skillNr].name = name;
            this.setState({ skills: this.state.skills })
        }
    };

    updateSkillVal(skillNr,  e) {
        const val = e.target.value;
        if (this.validateKey('val', val)) {
            this.state.skills[skillNr].val = val.toString() + '0%';
            this.setState({ skills: this.state.skills })
        }
    };

    updateStateFromList(expNr, taskNr, id, e) {
        const val = e.target.value;
        if (this.validateKey(id, val)) {
            this.state.experiences[expNr].tasks[taskNr] = val;
            this.setState({ experiences: this.state.experiences })
        }
    };

    addTask(expNr) {
        this.state.experiences[expNr].tasks.push('');
        this.setState({ experiences: this.state.experiences })
    };

    addSkill() {
        const newSkill = {
            name: '',
            val: '0%'
        }
        this.state.skills.splice(0, 0, newSkill);
        this.setState({ skills: this.state.skills })
    };

    removeSkill(skillNr) {
        this.state.skills.splice(skillNr, 1);
        this.setState({ skills: this.state.skills })
    };

    moveExpDown(expNr) {
        const movedExp = this.state.experiences.splice(expNr, 1)[0];
        this.state.experiences.splice(expNr+1, 0, movedExp);
        this.setState({ experiences: this.state.experiences })
    };

    moveExpUp(expNr) {
        const movedExp = this.state.experiences.splice(expNr, 1)[0];
        this.state.experiences.splice(expNr-1, 0, movedExp);
        this.setState({ experiences: this.state.experiences })
    };

    removeTask(expNr, taskNr) {
        this.state.experiences[expNr].tasks.splice(taskNr, 1);
        this.setState({ experiences: this.state.experiences })
    };

    calcSkillVal(val) {
        return parseInt(val)/10;
    }

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

        return (
            <div style={myStyle} className='skillsMainDiv'>
                <div className={'section'}>
                    <ValueField classes={'sectionHeader'} val={'Umiejętności'} styles={{color:this.props.pageColor}} />
                    {this.props.editMode && (<button className={'addSkill'} onClick={this.addSkill}>+</button>)}
                {this.state.skills.map((skill, skillNr) => (
                    <div className='skillRow' key={skillNr}>
                    {this.props.editMode ? (
                        <div className={'skillsAndProgress'}>
                            <EditField classes={'editSkillName'} val={skill.name} updateState={this.updateSkillName.bind(this, skillNr)}/>
                            <div className={'editSkillProgress'}>
                                <EditField classes={'editSkillVal'} val={this.calcSkillVal(skill.val)} updateState={this.updateSkillVal.bind(this, skillNr)}/>
                                <ValueField classes={'slash10'} val={'/ 10'} />
                            </div>
						{(this.state.skills.length > 1) && (
							<button className={'skillRemove'} onClick={this.removeSkill.bind(this, skillNr)}>-</button>
						)}
                            <br />
                        </div>
                    ) : (
                        <div className={'skillsAndProgress'}>
                            <ValueField classes={'skillName'} val={skill.name || '&nbsp'} />
                            <div className={'skillProgress'}>
                                <div className={'progress'}>
                                    <div className={'bar'} style={{width:skill.val, backgroundColor:this.props.pageColor}}></div>
                                </div>

                            </div>
                            <br />
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default SkillsSection;
