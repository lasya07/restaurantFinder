import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';

const render = Component => ReactDOM.render(
    <App/>,
    document.getElementById("root")
    //comment
);

render(App);


