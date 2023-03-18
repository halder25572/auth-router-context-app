import React, { useContext } from 'react';
import { AuthContext } from './context/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>Welcome</h2>
        </div>
    );
};

export default Home;