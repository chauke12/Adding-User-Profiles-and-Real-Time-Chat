import React from 'react';
import { supabase } from '../supabaseClient'; // Make sure to create this file

const UserProfile = ({ userId }) => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const fetchUser = async () => {
            const { data } = await supabase
                .from('users')
                .select('*')
                .eq('id', userId)
                .single();
            setUser(data);
        };

        fetchUser();
    }, [userId]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>Angelo Chauca</h1>
            <p>angelochauke06@gmail.com</p>
        </div>
    );
};

export default UserProfile;
