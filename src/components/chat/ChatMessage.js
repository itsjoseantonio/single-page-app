const ChatMessage = (props) => {
    const { text } = props.message;

    return (
        <>
            <div className="media media-chat media-chat-reverse">
                <div className="media-body">
                    <p>{text}</p>
                </div>
                <img
                    className="avatar"
                    src="https://img.icons8.com/color/36/000000/administrator-male.png"
                    alt="..."
                />
            </div>
        </>
    );
};

export default ChatMessage;
