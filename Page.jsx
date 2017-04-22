import React from 'react';

class Page extends React.Component {
    render() {

        const myStyle = {
            backgroundColor: 'grey',
            width: 800,
            height: 1200,
//            marginLeft: 'auto',
//            marginRight: 'auto'
            margin: '60px auto 60px auto'
        }

        return (
            <div style={myStyle}>
                Hello World!!!
            </div>
        );
    }
}

export default Page;
