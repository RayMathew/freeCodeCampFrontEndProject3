import React from 'react';

class Button extends React.Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
            <button className="button" onClick={this.props.onClick}
                                        disabled={this.props.disabled}
                                        id={this.props.id}>{this.props.value}</button>
        );
    }
}

export default Button;
