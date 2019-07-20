import React, {Component} from 'react';
import './App.css';
import Calculator from './components/calculator';

class App extends Component {
    render() {
        return (
            <div className="full-screen">
                <Calculator/>
            </div>
        );
    }
}

export default App;
