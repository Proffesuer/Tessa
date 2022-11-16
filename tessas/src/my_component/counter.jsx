import React, { Component } from 'react';

class Counter extends Component {
   state={
    count:0
   };
    render() { 
        return (<React.Fragment>
            
            <span className='badge badge-primary'>{this.formatcount()}</span>
        <button>Increment</button></React.Fragment>
        );
}

formatcount(){

const {count} =this.state;
    return count === 0 ?"Zero" :count;
}
}


export default Counter;
