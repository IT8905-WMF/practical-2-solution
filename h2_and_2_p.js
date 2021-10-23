/**
 * <h2>Add React in One Minute</h2>
    <p>This page demonstrates using React with no build tooling.</p>
    <p>React is loaded as a script tag.</p>
 */

'use strict';

// className: This is for Student Task: Add some styles
const h2And2P = () => (
    <div>
        <h2 className="red">Add React in One Minute</h2>
        <p>This page demonstrates using React with no build tooling.</p>
        <p className="red">React is loaded as a script tag.</p>
    </div>
);

ReactDOM.render(React.createElement(h2And2P), document.querySelector('#h2_and_2_p'));
