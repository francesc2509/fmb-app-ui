import React from 'react';

import './Home.scss'
import useGetProfile from './useGetProfile';
import { ProfileResponse } from './domain';

const Home = () => {
    const { loading, error, data } = useGetProfile(1)

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>{error}</h3>
    }

    return (<div className="Home">
        <div className="Home-Content">
            <div className="Home-Content-Title">
                <h3>{data?.firstname} {data?.surname}</h3>
            </div>
            <div className="Home-Content-Body">
                <p>{data?.description}</p>
            </div>
        </div>
    </div>);
}

export default Home;