import React from 'react';
import Header from './Header.jsx';
import DataSection from './DataSection.jsx';
import ExperienceSection from './ExperienceSection.jsx';


class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
			pageColor: 'orange'
        };
        this.changeMode = this.changeMode.bind(this);
        this.changePageColor = this.changePageColor.bind(this);

    }

    changeMode() {
        console.log(`changeMode editMode=${!this.state.editMode}`);
        this.setState(Object.assign({}, this.state, {editMode: !this.state.editMode}));
    }

    changePageColor(newColor) {
        console.log(`changecolor ${newColor}`);
        this.setState(Object.assign({}, this.state, {pageColor: newColor}));
    }


    render() {

        const myStyle = {
            backgroundColor: '#FFFFFF',
            border: 'solid 2px',
            borderColor: '#979797',
            width: 595,
            height: 842,
            margin: '60px auto 60px auto',
            overflow: 'hidden'
        }

        return (
            <div style={myStyle}>
                <Header changeModeFunc={this.changeMode} editMode={this.state.editMode} pageColor={this.state.pageColor} changePageColorFunc={this.changePageColor} />
                <DataSection secId={'Dane kontaktowe'} editMode={this.state.editMode} pageColor={this.state.pageColor} /> {/* TODO - tu ma byc np. 'Data', a nazwa sekcii edytowalna */}
                <ExperienceSection secId={'Doświadczenie zawodowe'} editMode={this.state.editMode} pageColor={this.state.pageColor} /> {/* TODO - tu ma byc np. 'Data', a nazwa sekcii edytowalna */}
            </div>
        );
    }
}

export default Page;
