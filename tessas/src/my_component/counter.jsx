import React, { Component } from 'react';

class Counter extends Component {
    state={
count:0,


    };

    render() { 
        return (
        <React.Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6'>
            <span className='badge badge-primary m-2 bg-success'>{this.formatCount()}</span>
            <button>Increment</button>
            <p>hello  this is my first column on my first row guys thats is really great and am really proud about it that am keeping moving </p>
            </div>
        <div className='col-sm-5'>
        <span className='badge badge-primary m-2 bg-success'>{this.formatCount()}</span>
            <button>Increment</button>
            <p>this is my second column on my first row guys and am really pround that i keep moving </p>


        </div>
            </div>
            </div>

            </React.Fragment>
        );
    }
    formatCount(){
        const {count} =this.state;

        return count ===0 ? 'Zero' :count;

    }
}

 
export default Counter;