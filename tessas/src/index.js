//we need to import the react object from the react module
import react from 'react';
//we also need to import reactDom from react-dom module
import reactDOM from 'react-dom';
//import the component from the counter
import Counter from './my_component/counter';

//create an element with JSX code that would be automatically converted to javascript automatically 

//with a reactDom we nned to set our element on an id
reactDOM.render(<Counter/>,document.getElementById("root"));


