import React from 'react';
import { Outlet } from 'react-router-dom';

// Components imports
import Aside from '../components/Aside';
interface Props {
    // Define your component's props here
}

const Root: React.FC<Props> = (props) => {
    // Implement your component logic here

    return (
        <>
            <Aside />
            <h1>MyComponent</h1>
            <Outlet />
        </>
    );
};

export default Root;