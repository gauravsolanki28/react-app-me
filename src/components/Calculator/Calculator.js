import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
    state={
        result:0,
        input:[]
    }
    
    onClickNumber = (e) =>{
        e.preventDefault()
        this.setState({
            input:this.state.input.concat(e.target.innerHTML)
        })
    }
    result = () =>{
        let input = this.state.input.join('');
        input= input.replace('x','*');
        let sum =  eval(input);
        this.setState({
            input:[sum]
        })
    }
    clear = () =>{
        this.setState({
            input:[]
        })
    }
    render() {
        return (
            <div className="container">
                <div className="calc-body">
                    <div className="calc-screen">
                        <div className="calc-operation">{this.state.result}</div>
                        <div className="calc-typed">{this.state.input}</div>
                    </div>
                    <div className="calc-button-row">
                        <div className="button c" onClick={this.clear}>C</div>
                        <div className="button l" onClick={this.onClickNumber}>≠</div>
                        <div className="button l" onClick={this.onClickNumber}>%</div>
                        <div className="button l" onClick={this.onClickNumber}>/</div>
                    </div>
                    <div className="calc-button-row">
                        <div className="button"name="7" value="7" onClick={this.onClickNumber}>7</div>
                        <div className="button" onClick={this.onClickNumber}>8</div>
                        <div className="button" onClick={this.onClickNumber}>9</div>
                        <div className="button l" onClick={this.onClickNumber}>x</div>
                    </div>
                    <div className="calc-button-row">
                        <div className="button" onClick={this.onClickNumber}>4</div>
                        <div className="button" onClick={this.onClickNumber}>5</div>
                        <div className="button" onClick={this.onClickNumber}>6</div>
                        <div className="button l" onClick={this.onClickNumber}> - </div>
                    </div>
                    <div className="calc-button-row">
                        <div className="button" onClick={this.onClickNumber}>1</div>
                        <div className="button" onClick={this.onClickNumber}>2</div>
                        <div className="button" onClick={this.onClickNumber}>3</div>
                        <div className="button l" onClick={this.onClickNumber}>+</div>
                    </div>
                    <div className="calc-button-row">
                        <div className="button" onClick={this.onClickNumber}>.</div>
                        <div className="button" onClick={this.onClickNumber}>0</div>
                        <div className="button" onClick={this.onClickNumber}></div>
                        <div className="button l" onClick={this.result}>=</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator