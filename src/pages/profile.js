import React from 'react';
import UserProfile from '../components/UserProfile';
import Chat from '../components/Chat';

const ProfilePage = () => {
    const userId = 'exampleUserId'; // Replace with actual user ID

    return (
        <div>
            <UserProfile userId={userId} />
            <Chat />
        </div>
    );
};

export default ProfilePage;
