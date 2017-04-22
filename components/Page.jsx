import React from 'react';
import Header from './Header.jsx';

class Page extends React.Component {
    render() {

        const myStyle = {
            backgroundColor: '#FFFFFF',
            border: 'solid 2px',
            borderColor: '#979797',
            width: 595,
            height: 842,
//            marginLeft: 'auto',
//            marginRight: 'auto'
            margin: '60px auto 60px auto'
        }

        return (
            <div style={myStyle}>
                <Header />
                Hello World!!!
            </div>
        );
    }
}

export default Page;
