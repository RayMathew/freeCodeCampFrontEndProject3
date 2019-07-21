import React from 'react';

class Screen extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="screen">
                <span className="display">{this.props.display}</span>
            </div>
        );
    }
}

export default Screen;
