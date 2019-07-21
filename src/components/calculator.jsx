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
        if (this.state.lastInputWasAnOperator && isOperator){
            currentDisplay = currentDisplay.replace(/..$/, value + ' ');
            console.log("hi", currentDisplay);
            this.setState({
                display: currentDisplay
            });
            return ;
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
            return ;
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
        let currentDisplay = this.state.display;
        const expression = this.state.expression;
        if (this.state.lastInputWasAnOperator){
            currentDisplay = currentDisplay.replace(/..$/, '');
        }
        let answer = (Math.round(1000000000000 * eval(currentDisplay)) / 1000000000000);
        this.setState({
            display: answer,
            lastInputWasAnOperator: false
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
        const buttonStyles = [
            {backgroundColor: '#AC3939', color: 'white'},
            {backgroundColor: '#F2873B', color: 'white'},
            {backgroundColor: '#974BB0', color: 'white'},
            {backgroundColor: '#4192E3', color: 'white'}
        ];
        return (
            <div className="calculator">
                <div className="height16dot6">
                    <Screen display={this.state.display}/>
                </div>
                <div style={{gridTemplateColumns: 'repeat(4, 25%)', gridTemplateRows: 'repeat(5, 20%)', height: 83.3+'%'}} className="grid">
                    <Button value={'AC'} onClick={this.clearDisplay}
                                            disabled={this.state.buttonsDisabled}
                                            style={{...buttonStyles[0], gridColumn: '1/3', gridRow: '1/2'}} />
                    <Button value={'/'} onClick={() => this.updateDisplay('/', true)}
                                            disabled={this.state.buttonsDisabled}
                                            id={'divide'}
                                            style={{...buttonStyles[1], gridColumn: '3/4', gridRow: '1/2'}} />
                    <Button value={'X'} onClick={() => this.updateDisplay('*', true)}
                                            disabled={this.state.buttonsDisabled}
                                            id={'multiply'}
                                            style={{...buttonStyles[1], gridColumn: '4/5', gridRow: '1/2'}} />
                    <Button value={7} onClick={() => this.updateDisplay(7)}
                                        disabled={this.state.buttonsDisabled}
                                        id={'seven'}
                                        style={{...buttonStyles[2], gridColumn: '1/2', gridRow: '2/3'}} />
                    <Button value={8} onClick={() => this.updateDisplay(8)}
                                        disabled={this.state.buttonsDisabled}
                                        id={'eight'}
                                        style={{...buttonStyles[2], gridColumn: '2/3', gridRow: '2/3'}} />
                    <Button value={9} onClick={() => this.updateDisplay(9)}
                                        disabled={this.state.buttonsDisabled}
                                        id={'nine'}
                                        style={{...buttonStyles[2], gridColumn: '3/4', gridRow: '2/3'}} />
                    <Button value={'-'} onClick={() => this.updateDisplay('-', true)}
                                        disabled={this.state.buttonsDisabled}
                                        id={'subtract'}
                                        style={{...buttonStyles[1], gridColumn: '4/5', gridRow: '2/3'}} />
                    <Button value={4} onClick={() => this.updateDisplay(4)}
                                        disabled={this.state.buttonsDisabled}
                                        id={'four'}
                                        style={{...buttonStyles[2], gridColumn: '1/2', gridRow: '3/4'}} />
                    <Button value={5} onClick={() => this.updateDisplay(5)}
                                        disabled={this.state.buttonsDisabled}
                                        id={'five'}
                                        style={{...buttonStyles[2], gridColumn: '2/3', gridRow: '3/4'}} />
                    <Button value={6} onClick={() => this.updateDisplay(6)}
                                        disabled={this.state.buttonsDisabled}
                                        id={'six'}
                                        style={{...buttonStyles[2], gridColumn: '3/4', gridRow: '3/4'}} />
                    <Button value={'+'} onClick={() => this.updateDisplay('+', true)}
                                        disabled={this.state.buttonsDisabled}
                                        id={'add'}
                                        style={{...buttonStyles[1], gridColumn: '4/5', gridRow: '3/4'}} />
                    <Button value={1} onClick={() => this.updateDisplay(1)}
                                        disabled={this.state.buttonsDisabled}
                                        id={'one'}
                                        style={{...buttonStyles[2], gridColumn: '1/2', gridRow: '4/5'}} />
                    <Button value={2} onClick={() => this.updateDisplay(2)}
                                        disabled={this.state.buttonsDisabled}
                                        id={'two'}
                                        style={{...buttonStyles[2], gridColumn: '2/3', gridRow: '4/5'}} />
                    <Button value={3} onClick={() => this.updateDisplay(3)}
                                        disabled={this.state.buttonsDisabled}
                                        id={'three'}
                                        style={{...buttonStyles[2], gridColumn: '3/4', gridRow: '4/5'}} />
                    <Button value={'='} onClick={() => this.calculateResult()}
                                            disabled={this.state.buttonsDisabled}
                                            id={'equals'}
                                            style={{...buttonStyles[3], gridColumn: '4/5', gridRow: '4/6'}} />
                    <Button value={0} onClick={() => this.updateDisplay(0)}
                                        disabled={this.state.buttonsDisabled}
                                        id={'zero'}
                                        style={{...buttonStyles[2], gridColumn: '1/3', gridRow: '5/6'}} />
                    <Button value={'.'} onClick={() => this.updateDisplay('.')}
                                        disabled={this.state.buttonsDisabled}
                                        id={'decimal'}
                                        style={{...buttonStyles[2], gridColumn: '3/4', gridRow: '5/6'}} />
                </div>

            </div>
        );
    }
}

export default Calculator;
