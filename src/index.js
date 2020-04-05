import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';


const App = () => {
    return (
        <div className= "ui container comments">
           <SingleComment author="Alex"/>
           <SingleComment author="Sam"/>
           <SingleComment author="Clever"/>
           <SingleComment author="Suarez"/>
           <SingleComment author="Messi"/>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));