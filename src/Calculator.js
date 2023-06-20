import React, { useState } from 'react';
import './Calculator.css'; 

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState();
  const operators = ['÷', 'x', '-', '+'];

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'AC') {
      clearDisplay();
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  const calculateResult = () => {
    try {
        const parsedExpression = display.replace(/÷/g, '/').replace(/x/g, '*');
        const results = parseFloat(eval(parsedExpression));
        setResult(results.toFixed(2).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
    setResult(null);
  };

  return (
    <div className="calculator">
      <div className="display">
        <div>{display}</div>
        <div>{(result)? "="+result: ""}</div>
      </div>
      <div className="keypad">
        <div className="left-side">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
        </div>
        <div className="right-side">
          <button onClick={() => handleButtonClick('AC')} className="backspace">
            AC
          </button>
          {operators.map((operator) => (
            <button key={operator} onClick={() => handleButtonClick(operator)}>
              {operator}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
