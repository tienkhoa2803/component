import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <SingleComment author="Alex" />
            </ApprovalCard>

            <ApprovalCard>
                <SingleComment author="Sam" />
            </ApprovalCard>

            <ApprovalCard>
                <SingleComment author="Clever" />
            </ApprovalCard>

            <ApprovalCard>
                <SingleComment author="Suarez" />

            </ApprovalCard>
            <ApprovalCard>
                <SingleComment author="Messi" />
            </ApprovalCard>

        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));