import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from "./app";
import App2 from "./app2"



ReactDOM.render(
    <div>
        <App/>
        <App2 />
    </div>,
    document.getElementById('root'));

