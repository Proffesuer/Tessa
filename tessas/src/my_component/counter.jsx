import React, { Component } from 'react';

class Counter extends Component {
   state={
    count:0
   };
   //styles={

    //fontSize:50,
    //dontWeight:"bold"
    

  // };




    render() { 
    let classes ="badge m-2";

        return (<React.Fragment>
            
            <span style= { {fontSize:50}}className='badge badge-primary'>{this.formatcount()}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button></React.Fragment>
        );
}

formatcount(){

const {count} =this.state;
    return count === 0 ?"Zero" :count;
}
}


export default Counter;
