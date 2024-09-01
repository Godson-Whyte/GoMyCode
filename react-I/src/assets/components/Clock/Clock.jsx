import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    return (
        <div className="clock-container">
            <h3>Digital Clock</h3>
            <h1>{`${hour}:${minute}:${second}`}</h1>
        </div>
    );
};

export default Clock;
