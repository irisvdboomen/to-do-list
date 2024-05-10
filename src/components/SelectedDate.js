import React, { useState, useEffect } from 'react';

function SelectedDate() {

    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSelectedDate(new Date());
        }, 60000);
        return () => clearInterval(intervalId)
    }, []);

    const displayDate = `${selectedDate.toLocaleDateString('en-GB', { weekday: 'long' })}, ${selectedDate.getDate()} ${selectedDate.toLocaleDateString('en-GB', { month: 'long' })}`;

    return (
        <>
            <h1>{displayDate}</h1>
        </>
    );
}

export default SelectedDate;