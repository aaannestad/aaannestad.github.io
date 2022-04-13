//import {React, useState} from React;
'use strict';

const e = React.createElement;

function Page() {
    return (
        <p>Page text!</p>
    )
}

const domContainer = document.querySelector('#react_page');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Page))