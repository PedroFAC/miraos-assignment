const Chat = () => {
  return (
    <>
      <div className="message-section">
        <div className="message sent">
          Patient: I have been feeling unwell for the past few days.
        </div>
        <div className="message received">
          Provider: Can you describe your symptoms?
        </div>
        <div className="message sent">
          Patient: I have a runny nose, sore throat, and mild fever.
        </div>
      </div>
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type a message..."
        />
        <button className="btn btn-secondary ml-2">Send Message</button>
      </div>
    </>
  );
};

export default Chat;
