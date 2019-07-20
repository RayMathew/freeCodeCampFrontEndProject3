import React from 'react';
import Screen from './screen';
import Button from './button';

class Calculator extends React.Component {

    render () {
        const {...attrs} = this.props.attributes ? this.props.attributes : {};
        return (
            <div style={{width: 80+'%', maxWidth: 400+'px', height: 90+'%', maxHeight: 500+'px'}}>
                <div className="height16dot6">
                    <Screen />
                </div>
                <div style={{gridTemplateColumns: '50% 25% 25%'}} className="grid height16dot6">
                    <Button value={'AC'} />
                    <Button value={'/'} />
                    <Button value={'X'} />
                </div>
                <div style={{gridTemplateColumns: 'repeat(4, 25%)'}} className="grid height16dot6">
                    <Button value={7}/>
                    <Button value={8} />
                    <Button value={9} />
                    <Button value={'-'} />
                </div>
                <div style={{gridTemplateColumns: 'repeat(4, 25%)'}} className="grid height16dot6">
                    <Button value={4} />
                    <Button value={5} />
                    <Button value={6} />
                    <Button value={'+'} />
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '75% 25%', height: 33.34+'%'}}>
                    <div style={{height: 100+'%'}}>
                        <div style={{gridTemplateColumns: 'repeat(3, 33.3%)'}} className="grid height50">
                            <Button value={1} />
                            <Button value={2} />
                            <Button value={3} />
                        </div>
                        <div style={{gridTemplateColumns: '66.7% 33.3%'}} className="grid height50">
                            <Button value={0} />
                            <Button value={'.'} />
                        </div>
                    </div>
                    <div style={{display: 'grid', gridTemplateColumns: '100%'}}>
                        <Button value={'='} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
