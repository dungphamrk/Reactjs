import React from 'react';

const FormatName = () => {
    const user = {
        firstName: 'Nguyễn Văn',
        lastName: 'Nam'
    };

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    }

    return (
        <div>
            <h2>Bai 6 </h2>
            <p>{formatName(user)}</p>
        </div>
    );
}

export default FormatName;
