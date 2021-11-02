import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Component //
import ChatMessage from './ChatMessage';

// Firebase //
import firebase from 'firebase/compat/app';
import { db } from '../../config/firebase.settings';

const ChatRoom = () => {
    const messagesRef = db.collection('messages');
    const query = messagesRef.orderBy('createdAt').limitToLast(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setFormValue('');
    };

    return (
        <>
            <div
                className="ps-container ps-theme-default ps-active-y"
                id="chat-content"
                style={{
                    height: '400px !important',
                }}
            >
                {messages &&
                    messages.map((msg) => (
                        <ChatMessage key={msg.id} message={msg} />
                    ))}
            </div>
            <form onSubmit={sendMessage}>
                <div className="publisher bt-1 border-light">
                    <input
                        value={formValue}
                        onChange={(e) => setFormValue(e.target.value)}
                        className="publisher-input"
                        type="text"
                        placeholder="Escribe algo"
                    />
                    <button
                        className="btn btn-dark"
                        type="submit"
                        disabled={!formValue}
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </>
    );
};

export default ChatRoom;
