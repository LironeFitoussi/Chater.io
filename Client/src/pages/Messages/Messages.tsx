import React from 'react';
import { Outlet } from 'react-router-dom';
interface Props {
    // Define your component props here
}

const Messages: React.FC<Props> = () => {
    // Add your component logic here

    return (
        <div>
            <h1>Messages</h1>
            <Outlet />
        </div>
    );
};

export default Messages;