import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        greeting:'Hello guys my name is levis chisira',
       
       
     } 
    render() { 
        return (
        //This is my container with one row and two column
           
        <div>

<h1>Bennavi Softsolution</h1>




        <p>
            Bennavi Softsolution is a startup located in the outcasts of Africa in Nairobi Kenya.
            Determined to innovate solution for problems in the societies.
            It was founded by Prof.Levis Chisira in the year 2022 as a small enterprise that saw 
            it rise to big company.
            Greetings from Above<br></br>:{this.state.greeting}
          

        </p>

    
    
    

    
</div>
        );
    }
}

export default Counter;