//we need to import the react object from the react module
//import react from 'react';
import React from 'react';
//we also need to import reactDom from react-dom module
import reactDOM from 'react-dom';
//import the component from the counter
import Counter from './my_component/counter';
//import the component from the count
import Count from './my_component/count';
import Counting from './my_component/counting';
import 'bootstrap/dist/css/bootstrap.css';


//create an element with JSX code that would be automatically converted to javascript automatically 

//with a reactDom we nned to set our element on an id
reactDOM.render(<Counter/>,document.getElementById("root"));
reactDOM.render(<Count/>,document.getElementById("roots"));

reactDOM.render(<Counting/>,document.getElementById("rooter"));





