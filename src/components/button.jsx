import React from 'react';

class Button extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        const {...attrs} = this.props.attributes ? this.props.attributes : {};
        return (
            <button>{this.props.value}</button>
        );
    }
}

export default Button;
