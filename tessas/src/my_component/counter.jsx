import React, { Component } from 'react';

class Counter extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>

<h1>Bennavi Softsolution</h1>
<div className='row'>
    <div className='col-sm-3 col-md-6 col-lg-4'>
        <p>
            Bennavi Softsolution is a startup located in the outcasts of Africa in Nairobi Kenya.
            Determined to innovate solution for problems in the societies.
            It was founded by Prof.Levis Chisira in the year 2022 as a small enterprise that saw it rise to big company.

        </p>

    </div>
    <div className='col-sm-3 col-md-6 col-lg-4'>
        <img src="%PUBLIC_URL%/logo192.png" className='img-responsive'alt='picture'></img>
        <a href='tabs.jsx'> another one</a>

    </div>

</div>

</div>
        );
    }
}
 
export default Counter;