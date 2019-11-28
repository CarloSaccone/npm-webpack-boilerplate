/*** src/index.js   ***/
import React, { useState } from 'react';
import { create } from 'jss';
import preset from 'jss-preset-default';
import MyStyles from './style';

const MyComponent = () => {
    const classes = MyStyles();

    const [test, setTest] = useState({ name: 'pippo' });
    const updated = { ...test };

    const jss = create(preset());

    return (
        <div className={classes.box}>
            <h1 className={classes.title}>
                Hello from My Component {test.name}
            </h1>
        </div>
    );
};
export default MyComponent;
