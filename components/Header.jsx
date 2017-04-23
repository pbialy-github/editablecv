import React from 'react';
import ValueField from './ValueField.jsx'; //bez jsx?
import EditField from './EditField.jsx'; //bez jsx?

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
    };

	componentDidMount(){
		//var that = this;
		document.getElementById('changeHeader').addEventListener('click', this.changeMode, false);
	}

    updateState(e) {
        //console.log('updateState e=' + e);
        //debugger;
        //this.setState({ data: e.target.value });
        this.setState({ [e.target.id]: e.target.value });
        //this.setState(Object.assign({}, this.state, e));
    };

    changeMode(){
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
        }

//        let editMode = false
//        console.log(`editMode ${editMode}`);

        return (
            <div style={myStyle}>
                {this.state.editMode ? (
                <EditField id={'job'} data={this.state.job} updateState={this.updateState} />
                ) : (
                <ValueField val={this.state.job}/>
                )}
                <button id='changeHeader'>zzmien</button>
            </div>
        );
    }
}

export default Header;
