import React from 'react';
import Screen from './screen';
import Button from './button';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0,
            buttonsDisabled: false,
            lastInputWasAnOperator: false
        };
    }

    clearDisplay = () => {
        this.setState({
            display: 0
        });
    };

    updateDisplay = (value, isOperator) => {
        const displayLength = document.getElementsByClassName('display')[0].offsetWidth;
        const screenLength = document.getElementsByClassName('screen')[0].offsetWidth;
        let currentDisplay = this.state.display.toString();
        if (displayLength/screenLength >= 0.92){
            this.flashLimit();
            return ;
        }
        if (value === '.' && (currentDisplay.includes('.'))){
            return ;
        }
        if (this.state.lastInputWasAnOperator){
            if (currentDisplay.slice(-1) === value){
                return ;
            }
            else {
                currentDisplay.replace(/.$/, value);
            }
        }
        if (this.state.display === 0){
            if (value === '.'){
                this.setState({
                    display: '0.',
                    lastInputWasAnOperator: false
                });
            }
            else {
                this.setState({
                    display: value,
                    lastInputWasAnOperator: false
                });
            }

        }
        if (!isOperator){
            this.setState({
                display: currentDisplay + `${value}`,
                lastInputWasAnOperator: false
            });
        }
        else {
            this.setState({
                display: currentDisplay + ` ${value} `,
                expression: currentDisplay + ` ${value} `,
                lastInputWasAnOperator: true
            })
        }
    };

    calculateResult = () => {
        const currentDisplay = this.state.display;
        const expression = this.state.expression;
        let answer = (Math.round(1000000000000 * eval(currentDisplay)) / 1000000000000);
        this.setState({
            display: answer
        });
    };

    flashLimit = () => {
        const currentDisplay = this.state.display;
        console.log("hi");
        this.setState({
            display: 'LIMIT MET',
            buttonsDisabled: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    display: currentDisplay,
                    buttonsDisabled: false
                });
            },900);
        });
    };

    render () {

        return (
            <div className="calculator">
                <div className="height16dot6">
                    <Screen display={this.state.display}/>
                </div>
                <div style={{gridTemplateColumns: '50% 25% 25%'}} className="grid height16dot6">
                    <Button value={'AC'} onClick={this.clearDisplay}
                                            disabled={this.state.buttonsDisabled}/>
                    <Button value={'/'} onClick={() => this.updateDisplay('/', true)}
                                            disabled={this.state.buttonsDisabled}/>
                    <Button value={'X'} onClick={() => this.updateDisplay('X', true)}
                                            disabled={this.state.buttonsDisabled}/>
                </div>
                <div style={{gridTemplateColumns: 'repeat(4, 25%)'}} className="grid height16dot6">
                    <Button value={7} onClick={() => this.updateDisplay(7)}
                                        disabled={this.state.buttonsDisabled}/>
                    <Button value={8} onClick={() => this.updateDisplay(8)}
                                        disabled={this.state.buttonsDisabled}/>
                    <Button value={9} onClick={() => this.updateDisplay(9)}
                                        disabled={this.state.buttonsDisabled}/>
                    <Button value={'-'} onClick={() => this.updateDisplay('-', true)}
                                        disabled={this.state.buttonsDisabled}/>
                </div>
                <div style={{gridTemplateColumns: 'repeat(4, 25%)'}} className="grid height16dot6">
                    <Button value={4} onClick={() => this.updateDisplay(4)}
                                        disabled={this.state.buttonsDisabled} />
                    <Button value={5} onClick={() => this.updateDisplay(5)}
                                        disabled={this.state.buttonsDisabled} />
                    <Button value={6} onClick={() => this.updateDisplay(6)}
                                        disabled={this.state.buttonsDisabled} />
                    <Button value={'+'} onClick={() => this.updateDisplay('+', true)}
                                        disabled={this.state.buttonsDisabled} />
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '75% 25%', height: 33.34+'%'}}>
                    <div style={{height: 100+'%'}}>
                        <div style={{gridTemplateColumns: 'repeat(3, 33.3%)'}} className="grid height50">
                            <Button value={1} onClick={() => this.updateDisplay(1)}
                                                disabled={this.state.buttonsDisabled} />
                            <Button value={2} onClick={() => this.updateDisplay(2)}
                                                disabled={this.state.buttonsDisabled} />
                            <Button value={3} onClick={() => this.updateDisplay(3)}
                                                disabled={this.state.buttonsDisabled} />
                        </div>
                        <div style={{gridTemplateColumns: '66.7% 33.3%'}} className="grid height50">
                            <Button value={0} onClick={() => this.updateDisplay(0)}
                                                disabled={this.state.buttonsDisabled} />
                            <Button value={'.'} onClick={() => this.updateDisplay('.')}
                                                disabled={this.state.buttonsDisabled} />
                        </div>
                    </div>
                    <div style={{display: 'grid', gridTemplateColumns: '100%'}}>
                        <Button value={'='} onClick={() => this.calculateResult()}
                                                disabled={this.state.buttonsDisabled} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
