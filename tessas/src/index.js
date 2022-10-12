//we need to import the react object from the react module
import react from 'react';
//we also need to import reactDom from react-dom module
import reactDOM from 'react-dom';

//create an element with JSX code that would be automatically converted to javascript automatically 
const element=<h1>Hello world my people its chisira!!</h1>;


//console.log(element);



//with a reactDom we nned to set our element on an id

reactDOM.render(element,document.getElementById('root'));