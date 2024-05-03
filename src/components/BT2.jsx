import React, { Component } from 'react';

class Calculation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: 10,
            number2: 10,
            history: []
        };
    }

    componentDidMount() {
        this.performCalculations();
    }

    performCalculations = () => {
        const { number1, number2 } = this.state;
        const addResult = number1 + number2;
        const subtractResult = number1 - number2;
        const multiplyResult = number1 * number2;
        const divideResult = number1 / number2 ;

        const history = [
            `${number1} + ${number2} = ${addResult}`,
            `${number1} - ${number2} = ${subtractResult}`,
            `${number1} * ${number2} = ${multiplyResult}`,
            `${number1} / ${number2} = ${divideResult}`
        ];

        this.setState({ history });
    }

    render() {
        const { history } = this.state;
        return (
            <div>
            <h1> Bai 2</h1>
                <ol>
                    {history.map((calculation, index) => (
                        <li key={index}>{calculation}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default Calculation;
