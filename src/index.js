/*** src/index.js   ***/
import React, { useState } from 'react';
import './styles.scss';
const MyComponent = () => {
    const [test, setTest] = useState('pippo');
    return (
        <div className="box">
            <h1>Hello from My Component {test}</h1>
        </div>
    );
};
export default MyComponent;
