import React from 'react';

const Total = ({ parts }) => {
    return (
        <p>Total Number of exercises = {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    );
};

export default Total;
