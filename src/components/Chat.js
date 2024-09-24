import React from 'react';
import { supabase } from '../supabaseClient';

const Chat = () => {
    const [messages, setMessages] = React.useState([]);
    const [newMessage, setNewMessage] = React.useState('');

    React.useEffect(() => {
        const subscription = supabase
            .from('messages')
            .on('INSERT', payload => {
                setMessages(prev => [...prev, payload.new]);
            })
            .subscribe();

        return () => {
            supabase.removeSubscription(subscription);
        };
    }, []);

    const sendMessage = async () => {
        await supabase.from('messages').insert([{ content: newMessage }]);
        setNewMessage('');
    };

    return (
        <div>
            <div>
                {messages.map(msg => (
                    <div key={msg.id}>{msg.content}</div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                placeholder="Type your message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
